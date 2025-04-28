import { HttpMethodEnum } from '@application/enum/http-method.enum';
import { IHttpService } from '@infra/http/http-service.interface';
import axios, { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

export class HttpGatewayService implements IHttpService {
  private url: string;
  private clientId: string;
  private clientSecret: string;
  private logger: Logger;
  constructor(private readonly configService: ConfigService) {
    this.url = configService.get<string>('PIX_API_BASE_URL') as string;
    this.clientId = configService.get<string>('CLIENT_ID') as string;
    this.clientSecret = configService.get<string>('PRIVATE_KEY') as string;
    this.logger = new Logger(HttpGatewayService.name);
  }
  async fetch<Req, Res>(
    url: string,
    method: HttpMethodEnum,
    body: Req,
    security: boolean,
  ): Promise<Res> {
    const authCookie = await this.getToken();
    const config: AxiosRequestConfig = {
      url: `${this.url}/${url}`,
      method,
      headers: {
        Cookie: authCookie,
      },
      withCredentials: security,
      data: body,
    };
    const response = await axios.request<Res>(config);

    this.logger.log(response.data);

    return response.data;
  }

  async getToken() {
    this.logger.log('Starting authentication request');
    const response = await axios.post(
      `${this.url}/bt/token`,
      {
        client_id: this.clientId,
        private_key: this.clientSecret,
      },
      { withCredentials: true },
    );

    const setCookie = response.headers['set-cookie']?.[0];
    if (!setCookie) {
      this.logger.error('No cookie received', { headers: response.headers });
      throw new Error('No cookie received from authentication');
    }
    const authCookie = setCookie.split(';')[0];

    this.logger.log('Authentication request completed');

    return authCookie;
  }
}
