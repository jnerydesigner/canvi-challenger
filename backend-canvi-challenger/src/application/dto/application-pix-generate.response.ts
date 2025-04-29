export interface ApplicationPixGenerateResponse {
  code: number;
  message: string;
  data: PixData;
}

export interface PixData {
  id?: number;
  pixInvoiceId: number;
  amount: string;
  dueDate: string;
  collectorId: string;
  collectorName: string;
  brCode: string;
  status: string;
  createdAt: string;
  qrCode: string;
  transactionId: string;
  maturity: string;
}
