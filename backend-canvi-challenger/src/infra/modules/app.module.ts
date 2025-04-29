import { WebhookModule } from './webhook.module';
import { WebhookController } from './../../controller/webhook.controller';
import { ClientModule } from './client.module';
import { DatabaseModule } from './database.module';
import { GeneratePixController } from './../../controller/generate-pix.controller';
import { DynamicPixModule } from './dynamic-pix.module';
import { AuthModule } from './auth.module';
import { AppService } from '@application/service/app.service';
import { AppController } from '@controller/app.controller';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    ClientModule,
    WebhookModule,
    DynamicPixModule,
  ],
  controllers: [WebhookController, GeneratePixController, AppController],
  providers: [AppService],
})
export class AppModule {}
