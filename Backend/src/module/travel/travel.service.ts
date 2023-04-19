import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientRequestResponse, HttpTuyaClient } from '../../common/service/http-tuya-client.service';
import { getLogger } from '../../common/utils';
import { FindTravelDto } from './dto/find-travel.dto';
@Injectable()
export class TravelService {
  private readonly logger = getLogger(TravelService.name);
  private apiTravel: string;
  constructor(private readonly httpTuyaClient: HttpTuyaClient, private readonly configService: ConfigService) {
    this.apiTravel = this.configService.get<string>('api.travel');
  }
  public async getAllTravel(findDto: FindTravelDto) {
    const configFindAll: AxiosRequestConfig = {
      method: 'get',
      url: this.apiTravel,
    };
    const response: HttpClientRequestResponse = await this.httpTuyaClient.request(configFindAll);
    const data = response.data || [];
    const count = data.length;
    return [data, count, +findDto.skip, +findDto.limit];
  }
}
