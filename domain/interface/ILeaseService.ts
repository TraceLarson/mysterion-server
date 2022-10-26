import ILease from "./ILease";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface ILeaseService {}
export interface ILeaseServiceConstructable {
  new (appDataSource: DataSource): ILeaseService;
}
