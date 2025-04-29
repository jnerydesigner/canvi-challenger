export interface WebhookStatusRepository {
  save(data: any): Promise<any>;
}
