import { WebhookStatusRepository } from '@model/repository/webhook-status.repository';
import { PrismaService } from '../prisma/prisma.service';
import { PixStatusWebhookDTO } from '@application/dto/webhook-status.dto';

export class WebhookStatusPrismaRepository implements WebhookStatusRepository {
  constructor(private readonly prisma: PrismaService) {}
  async save(data: PixStatusWebhookDTO): Promise<any> {
    const searchStatusWebhook = await this.prisma.pixStatusWebhook.findFirst({
      where: {
        statusId: data.statusId,
      },
    });

    if (!searchStatusWebhook) {
      await this.prisma.pixStatusWebhook.create({
        data,
      });

      return;
    }
  }
}
