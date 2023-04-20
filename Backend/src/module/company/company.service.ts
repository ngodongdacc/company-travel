import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientRequestResponse, HttpClient } from '../../common/service/http-client.service';
import { getLogger } from '../../common/utils';
import { CompanyDto } from './dto/company.dto';
import { FindCompanyDto } from './dto/find-company.dto';
@Injectable()
export class CompanyService {
  private readonly logger = getLogger(CompanyService.name);
  private apiCompany: string;
  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigService) {
    this.apiCompany = this.configService.get<string>('api.company');
  }
  public async getAllCompany(params: FindCompanyDto): Promise<[CompanyDto[], number, number, number]> {
    const configFindAll: AxiosRequestConfig = {
      method: 'get',
      params,
      url: this.apiCompany,
    };
    const response: HttpClientRequestResponse<CompanyDto[]> = await this.httpClient.request<CompanyDto[]>(
      configFindAll,
    );
    const data: CompanyDto[] = response.data || [];
    const count = data.length;
    const limit = +params.limit ? +params.limit : count;
    const skip = +params.skip ? +params.skip : 0;
    return [data.slice(skip, limit), count, skip, limit];
  }
}
