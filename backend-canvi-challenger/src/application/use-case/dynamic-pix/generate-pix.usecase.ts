/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { DynamicPixMapper } from '@model/mapper/dynamic-pix.mapper';
import { GatewayPixGenerateResponse } from '@application/dto/gateway-pix-generate.response';
import { DocumentTypeEnum } from '@application/enum/docuemtn-type.enum';
import { AuthService } from '@application/service/auth.service';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'node:crypto';
import { firstValueFrom } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';
import { ApplicationPixGenerateResponse } from '@application/dto/application-pix-generate.rsponse';

@Injectable()
export class GeneratePixUseCase {
  private logger: Logger;

  constructor(
    private readonly authService: AuthService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.logger = new Logger(GeneratePixUseCase.name);
  }

  async execute(
    input: InputGeneratePix,
  ): Promise<ApplicationPixGenerateResponse> {
    try {
      if (!input.value || !input.client.documentNumber) {
        this.logger.error('Invalid input', { input });
        throw new Error('Invalid input: Missing required fields');
      }

      this.logger.log('Starting authentication request');
      const urlGateway = this.configService.get<string>('PIX_API_BASE_URL');
      const clientId = this.configService.get<string>('CLIENT_ID');
      const privateKey = this.configService.get<string>('PRIVATE_KEY');
      if (!clientId || !privateKey) {
        this.logger.error('Missing PIX_CLIENT_ID or PIX_PRIVATE_KEY');
        throw new Error('Configuration error: Missing credentials');
      }

      const loginResp = await firstValueFrom(
        this.httpService
          .post(
            `${urlGateway}/bt/token`,
            { client_id: clientId, private_key: privateKey },
            { withCredentials: true },
          )
          .pipe(timeout({ each: 20000 }), retry({ count: 3, delay: 1000 })),
      );
      this.logger.log('Authentication request completed');

      const setCookie = loginResp.headers['set-cookie']?.[0];
      if (!setCookie) {
        this.logger.error('No cookie received', { headers: loginResp.headers });
        throw new Error('No cookie received from authentication');
      }
      const authCookie = setCookie.split(';')[0];

      const responseMapper =
        DynamicPixMapper.toGeneratePixGatewayPayment(input);
      const payload = {
        ...responseMapper,
        identificador_externo: randomUUID(),
        identificador_movimento: randomUUID(),
      };

      this.logger.log('Generated Pix payload', { payload });

      this.logger.log('Starting Pix generation request');

      const { data: response } = await firstValueFrom(
        this.httpService
          .post<GatewayPixGenerateResponse>(`${urlGateway}/bt/pix`, payload, {
            withCredentials: true,
            headers: { Cookie: authCookie },
          })
          .pipe(
            timeout({ each: 30000 }),
            retry({
              count: 3,
              delay: 1000,
            }),
          ),
      );

      this.logger.log(response);
      this.logger.log('Pix generation request completed');

      return DynamicPixMapper.toResponseApplication(response);
    } catch (erro) {
      throw new Error(`Failed to generate Pix: ${erro}`);
    }
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
