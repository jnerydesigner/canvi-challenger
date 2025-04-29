import { WebhookResponseDTO } from '@application/dto/webhook-response.dto';
import { PixStatusWebhookDTO } from '@application/dto/webhook-status.dto';

export class WebhookStatusMapper {
  static toPersistent(input: WebhookResponseDTO): PixStatusWebhookDTO {
    return {
      accountNumber: input.numero_conta,
      agencyNumber: input.agencia_conta,
      amount: input.valor,
      bankCode: input.codigo_banco || '',
      date: input.data,
      externalId: input.identificador_externo,
      instructionText: input.texto_instrucao,
      movementId: input.identificador_movimento,
      payerId: input.id_pagador,
      payerName: input.nome_pagador,
      pixInvoiceId: input.id_invoice_pix,
      settlementDate: input.data_efetivacao,
      status: input.status,
      statusId: input.id_status,
      transactionId: input.id_transacao,
      trackingCode: input.codigo_rastreio,
    };
  }
}
