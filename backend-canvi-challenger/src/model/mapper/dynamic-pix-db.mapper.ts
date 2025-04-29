import {
  ApplicationPixGenerateResponse,
  PixData,
} from '@application/dto/application-pix-generate.response';
import { PixGenerateRequestDb } from '@application/dto/pix-generate-db.request';

export class DynamicPixDbMapper {
  static toPersistency(
    data: ApplicationPixGenerateResponse,
  ): PixGenerateRequestDb {
    const pix = data.data;
    const res = {
      pixInvoiceId: pix.pixInvoiceId,
      amount: pix.amount,
      status: pix.status,
      txId: pix.txId,
      brCode: pix.brCode,
      collectorId: pix.collectorId,
      collectorName: pix.collectorName,
      dueDate: new Date(pix.dueDate),
      createdAt: new Date(pix.createdAt),
      qrCode: pix.qrCode,
      maturity: pix.maturity,
      externalIdentification: pix.externalIdentification,
    };

    return res;
  }

  static toResponse(data: PixGenerateRequestDb): PixData {
    return {
      id: data.id,
      pixInvoiceId: data.pixInvoiceId,
      amount: data.amount,
      status: data.status,
      txId: data.txId,
      brCode: data.brCode,
      collectorId: data.collectorId,
      collectorName: data.collectorName,
      dueDate: data.dueDate.toISOString(),
      createdAt: data.createdAt.toISOString(),
      qrCode: data.qrCode,
      maturity: data.maturity,
      externalIdentification: data.externalIdentification,
    };
  }
}
