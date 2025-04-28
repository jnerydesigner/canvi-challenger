import { ApplicationPixGenerateResponse } from '@application/dto/application-pix-generate.response';
import { GatewayPixGenerateResponse } from '@application/dto/gateway-pix-generate.response';
import { InputGeneratePix } from '@application/use-case/dynamic-pix/generate-pix.usecase';

export class DynamicPixMapper {
  static toGeneratePixGatewayPayment(
    input: InputGeneratePix,
  ): RequestGatewayPixGenerate {
    return {
      valor: input.value,
      vencimento: input.maturity,
      tipo_transacao: input.transactionType,
      texto_instrucao: input.textInstruction,
      identificador_externo: input.externalIdentifier,
      identificador_movimento: input.movementIdentifier,
      descricao: input.description,
      tag: input.tag,
      cliente: {
        nome: input.client.name,
        tipo_documento: input.client.documentType,
        numero_documento: input.client.documentNumber,
        'e-mail': input.client.email,
      },
    };
  }

  static toResponseApplication(
    input: GatewayPixGenerateResponse,
  ): ApplicationPixGenerateResponse {
    const d = input.data;

    return {
      code: input.code,
      message: input.mensagem,
      data: {
        id: d.id,
        pixInvoiceId: d.id_invoice_pix,
        amount: d.valor,
        dueDate: d.vencimento,
        collectorId: d.id_cobrador,
        collectorName: d.nome_cobrador,
        brCode: d.brcode,
        status: d.status,
        createdAt: d.criacao,
        qrCode: d.qrcode,
        transactionId: d.tx_id,
      },
    };
  }
}

export interface RequestGatewayPixGenerate {
  valor: number;
  vencimento: string;
  tipo_transacao: string;
  texto_instrucao: string;
  descricao: string;
  identificador_externo: string;
  identificador_movimento: string;
  tag: string[];
  cliente: Cliente;
}

export interface Cliente {
  nome: string;
  tipo_documento: string;
  numero_documento: string;
  'e-mail': string;
}

// pixCashin, pixCashinSemStatus

//"enviar_qr_code": true,
