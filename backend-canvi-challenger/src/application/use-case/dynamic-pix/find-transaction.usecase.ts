import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindTransactionUseCase {
  constructor(
    @Inject('DYNAMIC_PIX_REPOSITORY')
    private readonly dynamicPixRepository: DynamicPixInterface,
  ) {}
  async execute(invoice: number) {
    return this.dynamicPixRepository.findOneTransaction(invoice);
  }
}
