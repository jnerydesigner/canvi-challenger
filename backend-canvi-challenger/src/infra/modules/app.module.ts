import { GeneratePixController } from './../../controller/generate-pix.controller';
import { DynamicPixModule } from './dynamic-pix.module';
import { AuthModule } from './auth.module';
import { AppService } from '@application/service/app.service';
import { AppController } from '@controller/app.controller';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DynamicPixModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [GeneratePixController, AppController],
  providers: [AppService],
})
export class AppModule {}
