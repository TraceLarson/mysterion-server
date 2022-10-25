import IRawData from "./IRawData";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IRawDataService {}

export interface IRawDataServiceConstructable {
  new (appDataSource: DataSource): IRawDataService;
}
