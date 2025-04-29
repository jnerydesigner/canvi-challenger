import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const config = new ConfigService();
  const PORT = config.get<number>('SERVER_PORT', 3000);

  app.enableCors({
    origin: '*',
  });

  await app.listen(PORT, () => {
    logger.log(`Server is Running in PORT ${PORT}`);
  });
}
bootstrap();
