import { DynamicPixType } from "@/components/operations-table";
import { Api } from ".";

import { v4 as uuidv4 } from "uuid";
import { TypePix } from "@/components/generate-pix";

export const FetchPixList = async () => {
  const response = await Api.get<DynamicPixType[]>("/pix/list");

  console.log(response.data);

  return response.data;
};

export const FetchPixDetails = async (invoiceId: number) => {
  const response = await Api.get<DynamicPixDetails>(`/pix/find/${invoiceId}`);

  console.log(response.data);

  return response.data;
};

export const CreatePix = async (
  data: TypePix & { dueDate: Date | undefined }
) => {
  const response = await Api.post<DynamicPixDetails>(`/pix/generate-pix`, {
    value: data.amount,
    maturity: data.dueDate?.toISOString(),
    transactionType: "pixCashin",
    textInstruction: "Instrução",
    description: "Cobrança de teste",
    externalIdentifier: uuidv4(),
    movementIdentifier: uuidv4(),
    sendQrCode: false,
    tag: ["tag1", "tag2"],
    client: {
      name: data.name,
      documentType: "cpf",
      documentNumber: data.cpf,
      email: data.email,
    },
  });

  console.log(response.data);

  return response.data;
};

export interface DynamicPixDetails {
  id: number;
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
  clientId: number;
  maturity: string;
  Client: Client;
}

export interface Client {
  id: number;
  name: string;
  documentType: string;
  documentNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
