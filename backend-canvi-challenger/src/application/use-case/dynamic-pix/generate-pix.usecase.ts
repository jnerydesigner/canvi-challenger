import {
  DynamicPixMapper,
  RequestGatewayPixGenerate,
} from '@model/mapper/dynamic-pix.mapper';
import { GatewayPixGenerateResponse } from '@application/dto/gateway-pix-generate.response';
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PixData } from '@application/dto/application-pix-generate.response';
import { DynamicPixDbMapper } from '@model/mapper/dynamic-pix-db.mapper';
import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';
import { DocumentTypeEnum } from '@application/enum/document-type.enum';
import {
  ClientService,
  InputCreateUser,
} from '@application/service/client.service';
import { IHttpService } from '@infra/http/http-service.interface';
import { HttpMethodEnum } from '@application/enum/http-method.enum';

@Injectable()
export class GeneratePixUseCase {
  private logger: Logger;
  constructor(
    @Inject('DYNAMIC_PIX_REPOSITORY')
    private readonly dynamicPixRepo: DynamicPixInterface,
    private readonly clientService: ClientService,
    @Inject('HTTP_SERVICE')
    private readonly httpGatewayService: IHttpService,
  ) {
    this.logger = new Logger(GeneratePixUseCase.name);
  }

  async execute(input: InputGeneratePix): Promise<PixData | Error> {
    const client = await this.searchClient(input.client.email, input.client);
    try {
      if (!input.value || !input.client.documentNumber) {
        this.logger.error('Invalid input', { input });
        throw new Error('Invalid input: Missing required fields');
      }

      const responseMapper =
        DynamicPixMapper.toGeneratePixGatewayPayment(input);
      const payload = {
        ...responseMapper,
        identificador_externo: randomUUID(),
        identificador_movimento: randomUUID(),
        cliente: {
          nome: client.name,
          tipo_documento: client.documentType,
          numero_documento: client.documentNumber,
          'e-mail': client.email,
        },
      };

      this.logger.log('Generated Pix payload', { payload });

      this.logger.log('Starting Pix generation request');

      const resGateway = await this.httpGatewayService.fetch<
        RequestGatewayPixGenerate,
        GatewayPixGenerateResponse
      >('bt/pix', HttpMethodEnum.POST, payload, true);

      if (resGateway.code === 400) {
        throw new BadRequestException('No response call function');
      }

      this.logger.log('Pix generation request completed');

      this.logger.log(resGateway);

      const pixGenerateMapper =
        DynamicPixMapper.toResponseApplication(resGateway);

      const pixDbCreate = DynamicPixDbMapper.toPersistency(pixGenerateMapper);

      const returnedCreatedDB = await this.dynamicPixRepo.save(
        pixDbCreate,
        client.id,
      );

      return DynamicPixDbMapper.toResponse(returnedCreatedDB);
    } catch (erro) {
      throw new BadRequestException(erro);
    }
  }

  async searchClient(email: string, inputClient: InputClient) {
    let findClient = await this.clientService.findUser(email);
    if (!findClient) {
      const createUser: InputCreateUser = {
        name: inputClient.name,
        email: inputClient.email,
        documentType: inputClient.documentType,
        documentNumber: inputClient.documentNumber,
      };
      findClient = await this.clientService.createUser(createUser);
    }

    return findClient;
  }
}

export type InputGeneratePix = {
  value: number;
  maturity: string;
  description: string;
  transactionType: string;
  textInstruction: string;
  externalIdentifier: string;
  movementIdentifier: string;
  sendQrCode: boolean;
  tag: string[];
  client: InputClient;
};

type InputClient = {
  name: string;
  documentType: DocumentTypeEnum;
  documentNumber: string;
  email: string;
};

export type OutputGeneratePix = {
  code: number;
  message: string;
  data: DataGeneratePix;
};

export type DataGeneratePix = {
  pixInvoiceId: number;
  value: string;
  maturity: string;
  collectorId: string;
  collectorName: string;
  codeBr: string;
  status: string;
  qrcode: string;
  txId: string;
};
