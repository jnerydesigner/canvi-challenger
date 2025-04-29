export interface StaticPixDTO {
  code: number;
  mensagem: string;
  data: Data;
}

export interface Data {
  id_invoice_pix_documento: number;
  valor: string;
  id_cobrador: string;
  nome_cobrador: string;
  brcode: string;
  criacao: string;
  qrcode: string;
  tx_id: string;
}
