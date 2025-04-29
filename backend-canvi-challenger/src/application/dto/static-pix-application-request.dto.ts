export interface StaticPixApplicationRequestDTO {
  amount: number;
  description: string;
  transactionType: string;
  instructionText: string;
  externalIdentifier: string;
  movementIdentifier: string;
  sendQrCode: boolean;
  tag: string[];
}
