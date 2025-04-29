import { DetailsListQueryPixGateway } from '@application/dto/list-query-pix-gateway.dto';
import { DetailsListQueryPixDynamic } from '@prisma/client';

export class ListQueryPixMapper {
  static toPersistent(
    listQuery: DetailsListQueryPixGateway,
  ): DetailsListQueryPixDynamic {
    return {
      id: listQuery.id,
      acronym: listQuery.sigla,
      serviceName: listQuery.nome_servico,
      transactionId: listQuery.id_transacao,
      grossAmount: listQuery.valor_bruto,
      feeAmount: listQuery.valor_taxa,
      creationDate: new Date(listQuery.data_criacao),
      effectiveDate: listQuery.data_efetivacao || '',
      settlementDate: listQuery.data_baixa || '',
      statusName: listQuery.nome_situacao,
      payerId: listQuery.id_pagador || '',
      payerName: listQuery.nome_pagador || '',
      trackingCode: listQuery.codigo_rastreio || '',
      instructionText: listQuery.texto_instrucao,
      externalIdentifier: listQuery.identificador_externo,
      balanceSum: listQuery.soma_saldo,
      companyId: listQuery.id_empresa,
      descriptionText: listQuery.texto_descricao,
      bankName: listQuery.nome_banco,
      code: listQuery.codigo,
      agency: listQuery.agencia,
      receiverId: listQuery.id_recebedor,
      receiverName: listQuery.nome_recebedor,
      allowRefundedRelease: listQuery.ativo_liberar_devolucao,
    };
  }
}
