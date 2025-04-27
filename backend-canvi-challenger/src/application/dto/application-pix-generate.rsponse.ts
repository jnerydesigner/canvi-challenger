export interface ApplicationPixGenerateResponse {
  code: number;
  message: string;
  data: PixData;
}

export interface PixData {
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
}
