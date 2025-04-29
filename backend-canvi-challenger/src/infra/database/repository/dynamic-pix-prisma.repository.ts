import { PixGenerateRequestDb } from '@application/dto/pix-generate-db.request';
import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';
import { PrismaService } from '../prisma/prisma.service';
import { PixGenerate } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

export class DynamicPixPrismaRepository implements DynamicPixInterface {
  constructor(private readonly prisma: PrismaService) {}

  save(data: PixGenerateRequestDb, clientId: number): Promise<PixGenerate> {
    const res = this.prisma.pixGenerate.create({
      data: {
        amount: data.amount,
        brCode: data.brCode,
        collectorId: data.collectorId,
        collectorName: data.collectorName,
        dueDate: data.dueDate,
        createdAt: data.createdAt,
        pixInvoiceId: data.pixInvoiceId,
        transactionId: data.transactionId,
        qrCode: data.qrCode,
        status: data.status,
        clientId,
        maturity: data.maturity,
      },
    });

    console.log(res);

    return res;
  }

  async listAll(): Promise<PixGenerate[]> {
    return this.prisma.pixGenerate.findMany({
      include: {
        Client: true,
      },
    });
  }

  async findOneTransaction(invoice: number): Promise<PixGenerate> {
    const findTransaction = await this.prisma.pixGenerate.findFirst({
      where: {
        pixInvoiceId: invoice,
      },
      include: {
        Client: true,
      },
    });

    if (!findTransaction) {
      throw new NotFoundException('Transaction does not exists');
    }

    return findTransaction;
  }
}
