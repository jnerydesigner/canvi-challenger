import { FindTransactionUseCase } from '@application/use-case/dynamic-pix/find-transaction.usecase';
import {
  GeneratePixUseCase,
  InputGeneratePix,
} from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { ListPixUseCase } from '@application/use-case/dynamic-pix/list-pix.usecase';
import { NormalizeListQueryPix } from '@application/use-case/dynamic-pix/normalize-list-query-pix.usecase';
import { PixListQueryUseCase } from '@application/use-case/dynamic-pix/pix-list-query.usecase';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('pix')
export class DynamicPixController {
  constructor(
    private readonly generatePixUseCase: GeneratePixUseCase,
    private readonly listPixUseCase: ListPixUseCase,
    private readonly findTransactionUseCase: FindTransactionUseCase,
    private readonly pixListQueryUseCase: PixListQueryUseCase,
    private readonly normalizeListQueryPix: NormalizeListQueryPix,
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

  @Get('/list-query')
  pixLisQuery() {
    return this.pixListQueryUseCase.execute();
  }

  @Get('normalize/list-query-pix')
  normalize() {
    return this.normalizeListQueryPix.execute();
  }
}
