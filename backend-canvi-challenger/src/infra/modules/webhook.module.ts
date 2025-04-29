import { WebhookUseCase } from '@application/use-case/webhook/webhook.usecase';
import { WebhookController } from '@controller/webhook.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [WebhookUseCase],
  exports: [WebhookUseCase],
})
export class WebhookModule {}
