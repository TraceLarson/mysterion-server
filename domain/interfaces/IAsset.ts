import Manager from "../Manager";
import Operator from "../Operator";

export interface IAsset {
  RecordId: number;
  ID: number;
  Description: string;
  Name: string;
  Managers: Manager[];
  Operators: Operator[];
}
