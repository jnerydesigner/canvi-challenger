import {
  GeneratePixUseCase,
  InputGeneratePix,
} from '@application/use-case/dynamic-pix/generate-pix.usecase';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('pix')
export class GeneratePixController {
  constructor(private readonly generatePixUseCase: GeneratePixUseCase) {}

  @Post('/generate-pix')
  generatePix(@Body() pix: InputGeneratePix) {
    return this.generatePixUseCase.execute(pix);
  }
}
