export interface PixStatusWebhookDTO {
  id?: number;
  statusId: number;
  pixInvoiceId: number;
  status: string;
  date: string;
  transactionId: number;
  settlementDate: any;
  payerId: any;
  payerName: any;
  accountNumber: any;
  agencyNumber: any;
  bankCode: any;
  movementId: string;
  externalId: string;
  trackingCode: any;
  amount: string;
  instructionText: string;
}
