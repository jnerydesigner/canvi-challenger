import { PixGenerateRequestDb } from '@application/dto/pix-generate-db.request';
import { DetailsListQueryPixDynamic, PixGenerate } from '@prisma/client';

export interface DynamicPixInterface {
  save(pix: PixGenerateRequestDb, clientId: number): Promise<PixGenerate>;
  listAll(): Promise<PixGenerate[]>;
  findOneTransaction(invoice: number): Promise<PixGenerate>;
  createMany(pix: DetailsListQueryPixDynamic[]): Promise<any>;
  findAllListPixQuery(): Promise<DetailsListQueryPixDynamic[]>;
  listAllIdentifier(): Promise<{ externalIdentification: string }[]>;
  normalizeTableListPixDetails(externalIds: string[]): Promise<void>;
}
