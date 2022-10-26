import IAdmin from "./IAdmin";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IAdminService {}

export interface IAdminServiceConstructable {
  new (appDataSource: DataSource): IAdminService;
}
