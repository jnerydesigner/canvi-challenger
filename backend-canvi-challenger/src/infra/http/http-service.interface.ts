import { HttpMethodEnum } from '@application/enum/http-method.enum';

export interface IHttpService {
  fetch<Req, Res>(
    url: string,
    method: HttpMethodEnum,
    body: Req,
    security: boolean,
  ): Promise<Res>;
}
