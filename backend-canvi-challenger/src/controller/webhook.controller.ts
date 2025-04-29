import { WebhookResponseDTO } from '@application/dto/webhook-response.dto';
import { WebhookUseCase } from '@application/use-case/webhook/webhook.usecase';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookUseCase: WebhookUseCase) {}
  @Post('received')
  async receivedWebHook(@Body() body: WebhookResponseDTO) {
    await this.webhookUseCase.execute(body);
  }
}
