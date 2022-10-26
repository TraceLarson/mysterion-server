import IManager from "./IManager";
import IOperator from "./IOperator";
import IWell from "./IWell";

export default interface ILease {
  RecordId?: string | undefined;

  Id: number;

  Name: string;

  Managers: IManager[];

  Operators: IOperator[];

  Wells: IWell[];

  IsActive: boolean;
}
