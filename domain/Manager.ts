import { AbstractUser } from "./abstract/AbstractUser";
import ILease from "./interface/ILease";
import IManager from "./interface/IManager";
import IOperator from "./interface/IOperator";
import IWell from "./interface/IWell";

export default class Manager extends AbstractUser implements IManager {
  //#region Constructors

  constructor() {
    super();
  }

  //#endregion

  //#region Properties

  Managers: IManager[] = [];

  Operators: IOperator[] = [];

  Leases: ILease[] = [];

  Wells: IWell[] = [];

  //#endregion
}
