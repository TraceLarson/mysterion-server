import "reflect-metadata";
import IUserService, { IUserServiceConstructable } from "../interface/IUserService";
import { AppDataSource } from "../../data-source";
import IAdminService, { IAdminServiceConstructable } from "../interface/IAdminService";
import IAssetService, { IAssetServiceConstructable } from "../interface/IAssetService";
import ILeaseService, { ILeaseServiceConstructable } from "../interface/ILeaseService";
import IManagerService, { IManagerServiceConstructable } from "../interface/IManagerService";
import IOperatorService, { IOperatorServiceConstructable } from "../interface/IOperatorService";
import IPerformanceDataService, { IPerformanceDataServiceConstructable } from "../interface/IPerformanceDataService";
import IRawDataService, { IRawDataServiceConstructable } from "../interface/IRawDataService";
import IWellService, { IWellServiceConstructable } from "../interface/IWellService";

export default class ServiceFactory {
  //#region PublicMethods

  public static CreateUserService(serviceConstructable: IUserServiceConstructable): IUserService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateAdminService(serviceConstructable: IAdminServiceConstructable): IAdminService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateAssetService(serviceConstructable: IAssetServiceConstructable): IAssetService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateLeaseService(serviceConstructable: ILeaseServiceConstructable): ILeaseService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateManagerService(serviceConstructable: IManagerServiceConstructable): IManagerService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateOperatorService(serviceConstructable: IOperatorServiceConstructable): IOperatorService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreatePerformanceDataService(serviceConstructable: IPerformanceDataServiceConstructable): IPerformanceDataService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateWellService(serviceConstructable: IWellServiceConstructable): IWellService {
    return new serviceConstructable(AppDataSource);
  }

  public static CreateRawDataService(serviceConstructable: IRawDataServiceConstructable): IRawDataService {
    return new serviceConstructable(AppDataSource);
  }

  //#endregion
}
