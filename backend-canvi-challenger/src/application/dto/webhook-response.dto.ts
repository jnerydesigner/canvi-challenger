export interface WebhookResponseDTO {
  id_status: number;
  id_invoice_pix: number;
  status: string;
  data: string;
  id_transacao: number;
  data_efetivacao: any;
  id_pagador: any;
  nome_pagador: any;
  numero_conta: any;
  agencia_conta: any;
  codigo_banco: any;
  identificador_movimento: string;
  identificador_externo: string;
  codigo_rastreio: any;
  valor: string;
  texto_instrucao: string;
}
