import { PixGenerateRequestDb } from '@application/dto/pix-generate-db.request';
import { PixGenerate } from '@prisma/client';

export interface DynamicPixInterface {
  save(pix: PixGenerateRequestDb, clientId: number): Promise<PixGenerate>;
}
