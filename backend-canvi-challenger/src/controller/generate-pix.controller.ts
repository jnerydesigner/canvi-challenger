import { FindTransactionUseCase } from '@application/use-case/dynamic-pix/find-transaction.usecase';
import {
  GeneratePixUseCase,
  InputGeneratePix,
} from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { ListPixUseCase } from '@application/use-case/dynamic-pix/list-pix.usecase';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('pix')
export class GeneratePixController {
  constructor(
    private readonly generatePixUseCase: GeneratePixUseCase,
    private readonly listPixUseCase: ListPixUseCase,
    private readonly findTransactionUseCase: FindTransactionUseCase,
  ) {}

  @Post('/generate-pix')
  generatePix(@Body() pix: InputGeneratePix) {
    return this.generatePixUseCase.execute(pix);
  }

  @Get('/list')
  listPix() {
    return this.listPixUseCase.execute();
  }

  @Get('/find/:invoice')
  getTransactionDetails(@Param('invoice') invoice: number) {
    return this.findTransactionUseCase.execute(Number(invoice));
  }
}
