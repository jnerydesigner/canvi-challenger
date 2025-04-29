/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { ListQueryPixGatewayDTO } from '@application/dto/list-query-pix-gateway.dto';
import { HttpMethodEnum } from '@application/enum/http-method.enum';
import { IHttpService } from '@infra/http/http-service.interface';
import { ListQueryPixMapper } from '@model/mapper/list-query-pix.mapper';
import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';

import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PixListQueryUseCase {
  private logger: Logger;
  constructor(
    @Inject('HTTP_SERVICE')
    private readonly httpGatewayService: IHttpService,
    @Inject('DYNAMIC_PIX_REPOSITORY')
    private readonly dynamicPixRepo: DynamicPixInterface,
  ) {
    this.logger = new Logger(PixListQueryUseCase.name);
  }

  async execute() {
    const payload = new FormData();

    payload.append('data_inicial', '2025-04-01');
    payload.append('data_final', '2025-04-30');
    for (const [key, value] of payload.entries()) {
      this.logger.log(`${key}: ${value}`);
    }
    const resGateway = await this.httpGatewayService.fetch<
      any,
      ListQueryPixGatewayDTO
    >('bt/pix/dinamico/lista', HttpMethodEnum.POST, payload, true);

    this.logger.log(resGateway.data);

    const persistentMapper = resGateway.data.map((pix) => {
      return ListQueryPixMapper.toPersistent(pix);
    });

    await this.dynamicPixRepo.createMany(persistentMapper);

    return this.dynamicPixRepo.findAllListPixQuery();
  }
}

export type Output = {
  code: number;
  mensagem: string;
  data: Daum[];
};

export type Daum = {
  sigla: string;
  nome_servico: string;
  id: number;
  id_transacao: number;
  valor_bruto: string;
  valor_taxa: string;
  data_criacao: string;
  data_efetivacao?: string;
  data_baixa?: string;
  nome_situacao: string;
  id_pagador?: string;
  nome_pagador?: string;
  codigo_rastreio?: string;
  texto_instrucao: string;
  identificador_externo: string;
  soma_saldo: string;
  id_empresa: number;
  texto_descricao: string;
  nome_banco: any;
  codigo: any;
  agencia: any;
  id_recebedor: any;
  nome_recebedor: any;
  ativo_liberar_devolucao: number;
};
