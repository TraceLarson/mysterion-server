import IManager from "./IManager";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IManagerService {}

export interface IManagerServiceConstructable {
  new (appDataSource: DataSource): IManagerService;
}
