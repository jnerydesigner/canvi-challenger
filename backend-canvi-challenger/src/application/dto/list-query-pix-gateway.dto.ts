export interface ListQueryPixGatewayDTO {
  code: number;
  mensagem: string;
  data: DetailsListQueryPixGateway[];
}

export interface DetailsListQueryPixGateway {
  sigla: string;
  nome_servico: string;
  id: number;
  id_transacao: number;
  valor_bruto: string;
  valor_taxa: string;
  data_criacao: string;
  data_efetivacao?: string;
  data_baixa?: string;
  nome_situacao: string;
  id_pagador?: string;
  nome_pagador?: string;
  codigo_rastreio?: string;
  texto_instrucao: string;
  identificador_externo: string;
  soma_saldo: string;
  id_empresa: number;
  texto_descricao: string;
  nome_banco: any;
  codigo: any;
  agencia: any;
  id_recebedor: any;
  nome_recebedor: any;
  ativo_liberar_devolucao: number;
}
