import { RouteComponentProps } from "react-router";
import { ICompanyCost } from "./companyCost.model";

export interface IProps extends RouteComponentProps {}

export interface ICompanyCostState {
  data: ICompanyCost[];
  currentPage: number;
  count: number;
}
