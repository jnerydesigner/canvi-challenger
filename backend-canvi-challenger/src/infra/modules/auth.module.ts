import { AuthService } from '@application/service/auth.service';
import { AuthController } from '@controller/auth.controller';

import { Module } from '@nestjs/common';

import { HttpConfigModule } from './http.module';

@Module({
  imports: [HttpConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
