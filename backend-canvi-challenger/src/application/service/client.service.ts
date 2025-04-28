import { ClientRepository } from '@model/repository/client.repository';
import { Inject, Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private readonly clientRepository: ClientRepository,
  ) {}

  async findUser(email: string): Promise<Client> {
    return this.clientRepository.findByEmail(email);
  }

  async createUser(data: InputCreateUser): Promise<Client> {
    return this.clientRepository.createClient(data);
  }
}
export type InputCreateUser = {
  id?: number;
  name: string;
  documentType: string;
  documentNumber: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};
