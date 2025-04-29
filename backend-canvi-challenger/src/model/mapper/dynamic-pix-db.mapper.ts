import {
  ApplicationPixGenerateResponse,
  PixData,
} from '@application/dto/application-pix-generate.response';
import { PixGenerateRequestDb } from '@application/dto/pix-generate-db.request';
import { Logger } from '@nestjs/common';

export class DynamicPixDbMapper {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(DynamicPixDbMapper.name);
  }
  static toPersistency(
    data: ApplicationPixGenerateResponse,
  ): PixGenerateRequestDb {
    const pix = data.data;
    const res = {
      pixInvoiceId: pix.pixInvoiceId,
      amount: pix.amount,
      status: pix.status,
      transactionId: pix.transactionId,
      brCode: pix.brCode,
      collectorId: pix.collectorId,
      collectorName: pix.collectorName,
      dueDate: new Date(pix.dueDate),
      createdAt: new Date(pix.createdAt),
      qrCode: pix.qrCode,
      maturity: pix.maturity,
    };

    return res;
  }

  static toResponse(data: PixGenerateRequestDb): PixData {
    return {
      id: data.id,
      pixInvoiceId: data.pixInvoiceId,
      amount: data.amount,
      status: data.status,
      transactionId: data.transactionId,
      brCode: data.brCode,
      collectorId: data.collectorId,
      collectorName: data.collectorName,
      dueDate: data.dueDate.toISOString(),
      createdAt: data.createdAt.toISOString(),
      qrCode: data.qrCode,
      maturity: data.maturity,
    };
  }
}
