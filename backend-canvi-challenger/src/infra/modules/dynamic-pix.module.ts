import { GeneratePixUseCase } from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { DynamicPixController } from '@controller/dynamic-pix.controller';
import { Module } from '@nestjs/common';
import { HttpConfigModule } from './http.module';
import { AuthService } from '@application/service/auth.service';
import { ClientService } from '@application/service/client.service';
import { ListPixUseCase } from '@application/use-case/dynamic-pix/list-pix.usecase';
import { FindTransactionUseCase } from '@application/use-case/dynamic-pix/find-transaction.usecase';
import { PixListQueryUseCase } from '@application/use-case/dynamic-pix/pix-list-query.usecase';
import { NormalizeListQueryPix } from '@application/use-case/dynamic-pix/normalize-list-query-pix.usecase';

@Module({
  imports: [HttpConfigModule],
  controllers: [DynamicPixController],
  providers: [
    GeneratePixUseCase,
    AuthService,
    ClientService,
    ListPixUseCase,
    FindTransactionUseCase,
    PixListQueryUseCase,
    NormalizeListQueryPix,
  ],
  exports: [
    GeneratePixUseCase,
    ListPixUseCase,
    FindTransactionUseCase,
    PixListQueryUseCase,
    NormalizeListQueryPix,
  ],
})
export class DynamicPixModule {}
