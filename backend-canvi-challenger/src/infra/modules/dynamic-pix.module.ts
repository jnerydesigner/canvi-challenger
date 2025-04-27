import { GeneratePixUseCase } from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { GeneratePixController } from '@controller/generate-pix.controller';
import { Module } from '@nestjs/common';
import { HttpConfigModule } from './http.module';
import { AuthService } from '@application/service/auth.service';

@Module({
  imports: [HttpConfigModule],
  controllers: [GeneratePixController],
  providers: [GeneratePixUseCase, AuthService],
  exports: [GeneratePixUseCase],
})
export class DynamicPixModule {}
