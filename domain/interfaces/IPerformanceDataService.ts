import IPerformanceData from "./IPerformanceData";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IPerformanceDataService {}

export interface IPerformanceDataServiceConstructable {
  new (appDataSource: DataSource): IPerformanceDataService;
}
