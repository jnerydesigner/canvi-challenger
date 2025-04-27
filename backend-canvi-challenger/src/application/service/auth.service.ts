import { AuthMapper, AuthResponseCanvi } from '@model/mapper/auth.mapper';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async login() {
    const response = await firstValueFrom(
      this.httpService.post<AuthResponseCanvi>('/bt/token', {
        client_id: this.configService.get<string>('CLIENT_ID'),
        private_key: this.configService.get<string>('PRIVATE_KEY'),
      }),
    );

    return AuthMapper.toResponse(response.data);
  }
}
