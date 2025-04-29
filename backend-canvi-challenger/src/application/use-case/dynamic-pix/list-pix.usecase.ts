import { DynamicPixInterface } from '@model/repository/dynamic-pix.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ListPixUseCase {
  constructor(
    @Inject('DYNAMIC_PIX_REPOSITORY')
    private readonly dynamicPixRepository: DynamicPixInterface,
  ) {}
  execute() {
    return this.dynamicPixRepository.listAll();
  }
}
