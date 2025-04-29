export interface PixGenerateRequestDb {
  id?: number;
  pixInvoiceId: number;
  amount: string;
  dueDate: Date;
  collectorId: string;
  collectorName: string;
  brCode: string;
  status: string;
  createdAt: Date;
  qrCode: string;
  txId: string;
  maturity: string;
  externalIdentification: string;
}
