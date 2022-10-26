import IManager from "./interface/IManager";
import IOperator from "./interface/IOperator";
import IWell from "./interface/IWell";

export default class Lease {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";

  Id: number = 0;

  Name: string = "";

  Managers: IManager[] = [];

  Operators: IOperator[] = [];

  Wells: IWell[] = [];

  IsActive: boolean = false;

  //#endregion

  //#region Virtual Methods

  public GetLeaseName(): string {
    return `${this.Id} ${this.Name}`;
  }

  //#endregion
}
