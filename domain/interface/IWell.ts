import { ProductionTypes } from "../../Constants";
import ILease from "./ILease";
import IManager from "./IManager";
import IOperator from "./IOperator";
import IWellTraits from "./IWellTraits";

export default interface IWell {
  RecordId?: string | undefined;

  Id: number;

  Name: string;

  Lease: ILease;

  ProductionType: ProductionTypes;

  Managers: IManager[];

  Operators: IOperator[];

  Traits: IWellTraits;

  IsActive: boolean;
}
