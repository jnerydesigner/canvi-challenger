import { GeneratePixUseCase } from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { GeneratePixController } from '@controller/generate-pix.controller';
import { Module } from '@nestjs/common';
import { HttpConfigModule } from './http.module';
import { AuthService } from '@application/service/auth.service';
import { ClientService } from '@application/service/client.service';
import { ListPixUseCase } from '@application/use-case/dynamic-pix/list-pix.usecase';
import { FindTransactionUseCase } from '@application/use-case/dynamic-pix/find-transaction.usecase';

@Module({
  imports: [HttpConfigModule],
  controllers: [GeneratePixController],
  providers: [
    GeneratePixUseCase,
    AuthService,
    ClientService,
    ListPixUseCase,
    FindTransactionUseCase,
  ],
  exports: [GeneratePixUseCase, ListPixUseCase, FindTransactionUseCase],
})
export class DynamicPixModule {}
