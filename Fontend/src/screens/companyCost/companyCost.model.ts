
export interface ICompanyCost {
  id: string;
  name: string;
  parentId: string;
  cost: number;
  children: ICompanyCost[];
}


