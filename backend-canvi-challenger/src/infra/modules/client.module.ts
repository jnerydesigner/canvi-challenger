import { ClientService } from '@application/service/client.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
