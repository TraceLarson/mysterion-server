import { PositionTypes } from "../../Constants";
import ILease from "./ILease";
import IOperator from "./IOperator";
import IWell from "./IWell";

export default interface IManager {
  RecordId?: string | undefined;

  Id: number;

  FirstName: string;

  LastName: string;

  Position: PositionTypes;

  Password: string;

  IsActive: boolean;

  Managers: IManager[];

  Operators: IOperator[];

  Leases: ILease[];

  Wells: IWell[];
}
