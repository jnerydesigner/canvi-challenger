import { WebhookModule } from './webhook.module';
import { ClientModule } from './client.module';
import { DatabaseModule } from './database.module';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
