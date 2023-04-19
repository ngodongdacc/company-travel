import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientRequestResponse, HttpTuyaClient } from '../../common/service/http-tuya-client.service';
import { getLogger } from '../../common/utils';
import { CompanyTreeDto } from './dto/company-tree.dto';
import { CompanyDto } from './dto/company.dto';
import { FindCompanyDto } from './dto/find-company.dto';
@Injectable()
export class CompanyService {
  private readonly logger = getLogger(CompanyService.name);
  private apiCompany: string;
  private apiTravel: string;
  constructor(private readonly httpTuyaClient: HttpTuyaClient, private readonly configService: ConfigService) {
    this.apiCompany = this.configService.get<string>('api.company');
    this.apiTravel = this.configService.get<string>('api.travel');
  }
  public async getCompany(findDto: FindCompanyDto) {
    const configFindAll: AxiosRequestConfig = {
      method: 'get',
      url: this.apiCompany,
    };
    const response: HttpClientRequestResponse = await this.httpTuyaClient.request(configFindAll);
    const data = response.data || [];
    const count = data.length;
    return [data, count, +findDto.skip, +findDto.limit];
  }

  public async getAllCompanyTree() {
    const companyRes = await this.getCompany({});
    const companies: CompanyDto[] = companyRes[0] || [];
    const rootCompany = companies.find((c) => c.parentId === '0');
    const dataTree = this.getTreeCompany(rootCompany, companies);
    return [dataTree];
  }

  private getTreeCompany(rootCompany: CompanyDto, companies: CompanyDto[] = []) {
    const children: CompanyDto[] = companies.filter((c) => c.parentId === rootCompany.id);
    const companyTree: CompanyTreeDto = {
      ...rootCompany,
      children,
    };
    if (companyTree.children.length) {
      companyTree.children = companyTree.children.map((children) => {
        children = this.getTreeCompany(children, companies);
        return children;
      });
    }
    return companyTree;
  }
}
