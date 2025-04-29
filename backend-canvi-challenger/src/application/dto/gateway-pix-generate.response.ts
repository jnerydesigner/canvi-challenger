export interface GatewayPixGenerateResponse {
  code: number;
  mensagem: string;
  data: GatewayPixData;
}

export interface GatewayPixData {
  id_invoice_pix: number;
  id?: number;
  valor: string;
  vencimento: string;
  id_cobrador: string;
  nome_cobrador: string;
  brcode: string;
  status: string;
  criacao: string;
  qrcode: string;
  tx_id: string;
  identificador_externo: string;
}
