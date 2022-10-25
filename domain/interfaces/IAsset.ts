import Manager from "../Manager";
import Operator from "../Operator";

export default interface IAsset {
  RecordId: string;
  Id: number;
  Description: string;
  Name: string;
  Managers: Manager[];
  Operators: Operator[];
}
