import configServices from "../../../utils/configServices";
import { ICompanyCost } from "../companyCost.model";

export const getCategoriesTree = async (filter?: any) => {
  const result = await configServices.getService<ICompanyCost>(
    `company/cost`,
    filter,
    null,
    true
  );
  return result;
};
