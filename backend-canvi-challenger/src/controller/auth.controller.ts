import { AuthService } from '@application/service/auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login() {
    return this.authService.login();
  }
}
