import { Client } from '@prisma/client';

export interface ClientRepository {
  findByEmail(email: string): Promise<any>;
  createClient(data: any): Promise<Client>;
}
