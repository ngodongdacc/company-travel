import { TravelDto } from '../module/travel/dto/travel.dto';
import { CompanyDto } from '../module/company/dto/company.dto';
import { CompanyTreeCostDto } from '../module/cost/dto/companyTreeCost.dto';
import { cloneDeep } from 'lodash';
export const getCompanyTreeCost = (
  parentId: string,
  companies: CompanyDto[],
  travelCost: TravelDto[],
): CompanyTreeCostDto[] => {
  const companyChildren: CompanyTreeCostDto[] = [];
  const newcompanies: CompanyDto[] = [];
  let newTravelCost = cloneDeep(travelCost);

  for (const company of companies) {
    if (company.parentId === parentId) {
      const travelCostCompany = getCostCompany(company.id, newTravelCost);
      newTravelCost = travelCostCompany.travelCost;

      // cách 1
      // const children = getCompanyTreeCost(company.id, companies, newTravelCost);
      // const costChildren = children.reduce((x, y) => ({ cost: +x.cost + +y.cost }), { cost: 0 }).cost;

      const companyTreeChildren: CompanyTreeCostDto = {
        id: company.id,
        name: company.name,
        parentId: company.parentId,
        children: [],
        cost: travelCostCompany.cost,
      };
      companyChildren.push(companyTreeChildren);
    } else {
      newcompanies.push(company);
    }
  }

  // cách 2
  companyChildren.forEach((company) => {
    const children = getCompanyTreeCost(company.id, newcompanies, newTravelCost);
    const costChildren = children.reduce((x, y) => ({ cost: +x.cost + +y.cost }), { cost: 0 }).cost;
    company.children = children;
    company.cost += costChildren;
  });

  return companyChildren;
};

export const getCostCompany = (compayid: string, travelCost: TravelDto[]) => {
  let cost = 0;
  const newTravelCost: TravelDto[] = [];

  for (const companycost of travelCost) {
    if (companycost.companyId === compayid) {
      cost += +companycost.price;
    } else newTravelCost.push(companycost);
  }

  return {
    cost,
    travelCost: newTravelCost,
  };
};
