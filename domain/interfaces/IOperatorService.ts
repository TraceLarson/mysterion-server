import IOperator from "./IOperator";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";
export default interface IOperatorService {}

export interface IOperatorServiceConstructable {
  new (appDataSource: DataSource): IOperatorService;
}
