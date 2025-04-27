import { ResponseAuthDTO } from '@application/dto/response-auth.dto';

export class AuthMapper {
  static toResponse({
    code,
    mensagem,
    token,
  }: AuthResponseCanvi): ResponseAuthDTO {
    return {
      code,
      message: mensagem,
      token,
    };
  }
}

export type AuthResponseCanvi = {
  code: number;
  mensagem: string;
  token: string;
};
