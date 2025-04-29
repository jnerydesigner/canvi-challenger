export interface StaticPixGatewayRequestDTO {
  valor: number;
  descricao: string;
  tipo_transacao: string;
  texto_instrucao: string;
  identificador_externo: string;
  identificador_movimento: string;
  enviar_qr_code: boolean;
  tag: string[];
}
