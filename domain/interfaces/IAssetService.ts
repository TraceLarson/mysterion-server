import IAsset from "./IAsset";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IAssetService {}

export interface IAssetServiceConstructable {
  new (appDataSource: DataSource): IAssetService;
}
