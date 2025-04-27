import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private configService: ConfigService) {}
  createHttpOptions(token: string | null = null): HttpModuleOptions {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Cookie'] = `pixToken=${token}`;
    }
    return {
      baseURL: this.configService.get('PIX_API_BASE_URL'),
      timeout: 5000,
      withCredentials: true,
      headers,
    };
  }
}
