import { DocumentTypeEnum } from '@application/enum/document-type.enum';

export interface ClientRequestDto {
  name: string;
  documentType: DocumentTypeEnum;
  documentNumber: string;
  email: string;
}
