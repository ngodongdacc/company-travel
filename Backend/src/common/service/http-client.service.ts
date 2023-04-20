import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
export interface HttpClientRequestResponse<T> {
  statusCode: number;
  data: T;
}
@Injectable()
export class HttpClient {
  public readonly logger = new Logger(HttpClient.name);
  // customized axios request
  public async request<T>(config: AxiosRequestConfig): Promise<HttpClientRequestResponse<T>> {
    try {
      const response = await axios(config);
      const result: HttpClientRequestResponse<T> = {
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
