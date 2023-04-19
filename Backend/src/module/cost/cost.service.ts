import { Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { CompanyDto } from '../company/dto/company.dto';
import { TravelDto } from '../travel/dto/travel.dto';
import { TravelService } from '../travel/travel.service';
import { CompanyTreeCostDto } from './dto/companyTreeCost.dto';
@Injectable()
export class CostService {
  constructor(private readonly companyService: CompanyService, private readonly travelService: TravelService) {}

  public async companyTreeCost() {
    const [companies, travel]: [CompanyDto[], TravelDto[]] = await Promise.all([
      this.companyService.getCompany({}).then((company) => company[0] || []),
      this.travelService.getAllTravel({}).then((travel) => travel[0] || []),
    ]);
    const rootCompany = companies.find((com) => com.parentId === '0');
    if (!rootCompany) return [[]];
    const costRootCompany = travel
      .filter((tra) => tra.companyId === rootCompany.id)
      .reduce((x, y) => ({ price: +x.price + +y.price }), { price: 0 });
    const rootCompanyCost: CompanyTreeCostDto = { ...rootCompany, children: [], cost: costRootCompany.price };
    const data = this.getTreeCompanyCost(rootCompanyCost, companies, travel);
    return [data];
  }

  private getTreeCompanyCost(rootCompany: CompanyTreeCostDto, companies: CompanyDto[] = [], travelCost: TravelDto[]) {
    let children: CompanyTreeCostDto[] = companies
      .filter((c) => c.parentId === rootCompany.id)
      .map((com) => {
        const travel = travelCost
          .filter((tra) => tra.companyId === com.id)
          .reduce((x, y) => ({ price: +x.price + +y.price }), { price: 0 });
        const company: CompanyTreeCostDto = {
          ...com,
          children: [],
          cost: travel.price,
        };
        return company;
      });
    if (children.length) {
      children = children.map((child) => this.getTreeCompanyCost(child, companies, travelCost));
    }
    const companyTree: CompanyTreeCostDto = {
      ...rootCompany,
      cost: rootCompany.cost + children.reduce((x, y) => ({ cost: x.cost + y.cost }), { cost: 0 }).cost,
      children,
    };
    return companyTree;
  }
}
