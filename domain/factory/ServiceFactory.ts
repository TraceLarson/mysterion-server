import "reflect-metadata";
import IUserService, { IUserServiceConstructable } from "../interfaces/IUserService";
import { DataSource } from "typeorm";
import IAdminService, { IAdminServiceConstructable } from "../interfaces/IAdminService";
import IAssetService, { IAssetServiceConstructable } from "../interfaces/IAssetService";
import ILeaseService, { ILeaseServiceConstructable } from "../interfaces/ILeaseService";
import IManagerService, { IManagerServiceConstructable } from "../interfaces/IManagerService";
import IOperatorService, { IOperatorServiceConstructable } from "../interfaces/IOperatorService";
import IPerformanceDataService, { IPerformanceDataServiceConstructable } from "../interfaces/IPerformanceDataService";
import IRawDataService, { IRawDataServiceConstructable } from "../interfaces/IRawDataService";
import IWellService, { IWellServiceConstructable } from "../interfaces/IWellService";

export default class ServiceFactory {
  //#region PublicMethods

  public static CreateUserService(serviceConstructable: IUserServiceConstructable, appDataSource: DataSource): IUserService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateAdminService(serviceConstructable: IAdminServiceConstructable, appDataSource: DataSource): IAdminService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateAssetService(serviceConstructable: IAssetServiceConstructable, appDataSource: DataSource): IAssetService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateLeaseService(serviceConstructable: ILeaseServiceConstructable, appDataSource: DataSource): ILeaseService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateManagerService(serviceConstructable: IManagerServiceConstructable, appDataSource: DataSource): IManagerService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateOperatorService(serviceConstructable: IOperatorServiceConstructable, appDataSource: DataSource): IOperatorService {
    return new serviceConstructable(appDataSource);
  }

  public static CreatePerformanceDataService(serviceConstructable: IPerformanceDataServiceConstructable, appDataSource: DataSource): IPerformanceDataService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateWellService(serviceConstructable: IWellServiceConstructable, appDataSource: DataSource): IWellService {
    return new serviceConstructable(appDataSource);
  }

  public static CreateRawDataService(serviceConstructable: IRawDataServiceConstructable, appDataSource: DataSource): IRawDataService {
    return new serviceConstructable(appDataSource);
  }

  //#endregion
}
