import { Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { TravelService } from '../travel/travel.service';
import { CompanyTreeCostDto } from './dto/companyTreeCost.dto';
import { FindCompanyDto } from '../company/dto/find-company.dto';
import { getCompanyTreeCost } from 'src/common/tree-cost';
@Injectable()
export class CostService {
  constructor(private readonly companyService: CompanyService, private readonly travelService: TravelService) {}

  public async companyTreeCost(query: FindCompanyDto): Promise<[CompanyTreeCostDto[]]> {
    query.limit = 0;
    const [companies, travel] = await Promise.all([
      this.companyService.getAllCompany(query).then((company) => company[0] || []),
      this.travelService.getAllTravel({ limit: 0 }).then((travel) => travel[0] || []),
    ]);
    const data = getCompanyTreeCost('0', companies, travel);
    return [data];
  }
}
