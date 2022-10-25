import IWell from "./IWell";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IWellService {}

export interface IWellServiceConstructable {
  new (appDataSource: DataSource): IWellService;
}
