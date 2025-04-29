export interface DetailsListQueryPixDTO {
  acronym: string;
  serviceName: string;
  id: number;
  transactionId: number;
  grossAmount: string;
  feeAmount: string;
  creationDate: string;
  effectiveDate?: string;
  settlementDate?: string;
  statusName: string;
  payerId?: string;
  payerName?: string;
  trackingCode?: string;
  instructionText: string;
  externalIdentifier: string;
  balanceSum: string;
  companyId: number;
  descriptionText: string;
  bankName: string;
  code: string;
  agency: string;
  receiverId: string;
  receiverName: string;
  allowRefundedRelease: number;
}
