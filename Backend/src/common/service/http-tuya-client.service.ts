import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig } from 'axios';
export interface HttpClientRequestResponse {
  statusCode: number;
  data: any;
}
@Injectable()
export class HttpTuyaClient {
  public readonly logger = new Logger(HttpTuyaClient.name);
  private headers: any;
  private secret: string;
  constructor(private configService: ConfigService) {
    this.secret = this.configService.get<string>('tuya.secret');
    this.headers = {
      client_id: this.configService.get<string>('tuya.client_id'),
      sign_method: this.configService.get<string>('tuya.sign_method'),
      t: new Date().getTime(),
    };
  }
  // customized axios request
  public async request(config: AxiosRequestConfig): Promise<HttpClientRequestResponse> {
    try {
      const response = await axios(config);
      const result: HttpClientRequestResponse = {
        statusCode: response.status,
        data: response.data,
      };
      return result;
    } catch (error) {
      this.logger.error(error?.message, error);
      throw error;
    }
  }
}
