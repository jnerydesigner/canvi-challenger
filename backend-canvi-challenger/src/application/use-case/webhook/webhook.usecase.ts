import { WebhookResponseDTO } from '@application/dto/webhook-response.dto';
import { WebhookStatusMapper } from '@model/mapper/wbehook-status.mapper';
import { WebhookStatusRepository } from '@model/repository/webhook-status.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class WebhookUseCase {
  constructor(
    @Inject('WEBHOOK_STATUS_REPOSITORY')
    private readonly webhookRepository: WebhookStatusRepository,
  ) {}
  async execute(input: WebhookResponseDTO) {
    const mapper = WebhookStatusMapper.toPersistent(input);
    await this.webhookRepository.save(mapper);
    console.log(mapper);
    return {
      input,
    };
  }
}
