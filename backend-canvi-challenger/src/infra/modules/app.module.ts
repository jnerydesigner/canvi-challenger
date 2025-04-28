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
    DatabaseModule,
    DynamicPixModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    ClientModule,
  ],
  controllers: [GeneratePixController, AppController],
  providers: [AppService],
})
export class AppModule {}
