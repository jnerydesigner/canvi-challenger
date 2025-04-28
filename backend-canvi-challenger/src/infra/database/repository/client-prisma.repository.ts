import { ClientRepository } from '@model/repository/client.repository';
import { PrismaService } from '../prisma/prisma.service';
import { ClientRequestDto } from '@application/dto/client.request.dto';
import { Client } from '@prisma/client';

export class ClientPrismaRepository implements ClientRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByEmail(email: string): Promise<Client | boolean> {
    const client = await this.prisma.client.findFirst({
      where: {
        email,
      },
    });

    if (!client) {
      return false;
    }

    return client;
  }
  async createClient(data: ClientRequestDto): Promise<Client> {
    return await this.prisma.client.create({
      data: {
        name: data.name,
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        email: data.email,
      },
    });
  }
}
