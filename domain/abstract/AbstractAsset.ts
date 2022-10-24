import Manager from "../Manager";
import Operator from "../Operator";
import { IAsset } from "../interfaces/IAsset";

export abstract class AbstractAsset implements IAsset {
  //#region Properties

  RecordId: number = 0;
  ID: number = 0;
  Description: string = "";
  Name: string = "";
  Managers: Manager[] = [];
  Operators: Operator[] = [];

  //#endregion
}
