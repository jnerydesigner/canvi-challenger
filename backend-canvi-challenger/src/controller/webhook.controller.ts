import { Body, Controller, Get } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get('received')
  receivedWebHook(@Body() body: any) {
    console.log(body);
  }
}
