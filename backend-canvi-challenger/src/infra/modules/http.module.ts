import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpGatewayService } from '@application/service/http-gateway.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const baseURL = configService.get<string>('PIX_API_BASE_URL');
        const token = configService.get<string>('PIX_API_TOKEN');

        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        if (token) {
          headers['Cookie'] = `token=${token}`;
        }

        return {
          baseURL,
          timeout: 30000,
          withCredentials: true,
          headers,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'HTTP_SERVICE',
      useFactory: (config: ConfigService) => {
        return new HttpGatewayService(config);
      },
      inject: [ConfigService],
    },
  ],
  exports: [HttpModule, 'HTTP_SERVICE'],
})
export class HttpConfigModule {}
