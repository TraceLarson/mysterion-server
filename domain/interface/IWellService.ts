import IWell from "./IWell";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IWellService {
  CreateNewWell(newWell: IWell): Promise<void>;

  GetWell(wellRecordId: string): Promise<IWell | null>;

  GetWells(): Promise<IWell[] | []>;

  UpdateWell(well: IWell, otherWell: IWell): Promise<void>;

  UpdateWellActiveStatus(well: IWell, isActive: boolean): Promise<void>;

  DeleteWell(well: IWell): Promise<void>;
}

export interface IWellServiceConstructable {
  new (appDataSource: DataSource): IWellService;
}
