import IWell from "./interface/IWell";
import { ProductionTypes } from "../Constants";
import WellTraits from "./WellTraits";
import IWellTraits from "./interface/IWellTraits";
import IManager from "./interface/IManager";
import IOperator from "./interface/IOperator";
import Lease from "./Lease";
import ILease from "./interface/ILease";

export default class Well implements IWell {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";

  Id: number = 0;

  Name: string = "";

  Lease: ILease = new Lease();

  ProductionType: ProductionTypes = ProductionTypes.None;

  Managers: IManager[] = [];

  Operators: IOperator[] = [];

  Traits: IWellTraits = new WellTraits();

  IsActive: boolean = false;

  //#endregion

  //#region Virtual Methods

  public GetWellName(): string {
    return `${this.Id} ${this.Name}`;
  }

  //#endregion
}
