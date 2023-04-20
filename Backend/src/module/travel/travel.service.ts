import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientRequestResponse, HttpClient } from '../../common/service/http-client.service';
import { getLogger } from '../../common/utils';
import { FindTravelDto } from './dto/find-travel.dto';
import { TravelDto } from './dto/travel.dto';
@Injectable()
export class TravelService {
  private readonly logger = getLogger(TravelService.name);
  private apiTravel: string;
  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigService) {
    this.apiTravel = this.configService.get<string>('api.travel');
  }
  public async getAllTravel(findDto: FindTravelDto): Promise<[TravelDto[], number, number, number]> {
    const params: any = {};
    params[findDto.field] = findDto.search;
    const configFindAll: AxiosRequestConfig = {
      method: 'get',
      params,
      url: this.apiTravel,
    };
    const response: HttpClientRequestResponse<TravelDto[]> = await this.httpClient.request<TravelDto[]>(configFindAll);
    const data: TravelDto[] = response.data || [];
    const count = data.length;
    const limit = +params.limit ? +params.limit : count;
    const skip = +params.skip ? +params.skip : 0;
    return [data.slice(skip, limit), count, skip, limit];
  }
}
