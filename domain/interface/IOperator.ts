import { PositionTypes } from "../../Constants";
import ILease from "./ILease";
import IManager from "./IManager";
import IWell from "./IWell";

export default interface IOperator {
  RecordId?: string | undefined;

  Id: number;

  FirstName: string;

  LastName: string;

  Position: PositionTypes;

  Password: string;

  IsActive: boolean;

  Managers: IManager[];

  Leases: ILease[];

  Wells: IWell[];
}
