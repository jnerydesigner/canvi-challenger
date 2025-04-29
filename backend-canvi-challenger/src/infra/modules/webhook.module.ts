import { WebhookController } from '@controller/webhook.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [],
})
export class WebhookModule {}
