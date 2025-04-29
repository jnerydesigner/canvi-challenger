import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NormalizeListQueryPix {
  private logger: Logger;
  constructor(
    @Inject('DYNAMIC_PIX_REPOSITORY')
    private readonly dynamicPixRepo: DynamicPixInterface,
  ) {
    this.logger = new Logger(NormalizeListQueryPix.name);
  }

  async execute() {
    const listPix = await this.dynamicPixRepo.listAllIdentifier();
    this.logger.log(listPix);
    const externalValidIds = listPix.map((r) => r.externalIdentification);
    await this.dynamicPixRepo.normalizeTableListPixDetails(externalValidIds);
    return {
      message: 'Normalizado com Sucesso',
    };
  }
}
