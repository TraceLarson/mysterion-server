import { AbstractUser } from "./abstract/AbstractUser";
import ILease from "./interface/ILease";
import IManager from "./interface/IManager";
import IWell from "./interface/IWell";

export default class Operator extends AbstractUser {
  //#region Constructors

  constructor() {
    super();
  }

  //#endregion

  //#region Properties

  Managers: IManager[] = [];

  Leases: ILease[] = [];

  Wells: IWell[] = [];

  //#endregion
}
