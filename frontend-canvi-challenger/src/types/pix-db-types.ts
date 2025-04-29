export interface PixDbTypes {
  id: number;
  pixInvoiceId: number;
  amount: string;
  dueDate: Date;
  collectorId: string;
  collectorName: string;
  brCode: string;
  status: string;
  createdAt: Date;
  qrCode: string;
  transactionId: string;
  clientId: number | null;
}
