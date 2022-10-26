import "reflect-metadata";
import IUserService, { IUserServiceConstructable } from "../interface/IUserService";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
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

  public static async CreateUserService(serviceConstructable: IUserServiceConstructable): Promise<IUserService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateAdminService(serviceConstructable: IAdminServiceConstructable): Promise<IAdminService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateAssetService(serviceConstructable: IAssetServiceConstructable): Promise<IAssetService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateLeaseService(serviceConstructable: ILeaseServiceConstructable): Promise<ILeaseService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateManagerService(serviceConstructable: IManagerServiceConstructable): Promise<IManagerService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateOperatorService(serviceConstructable: IOperatorServiceConstructable): Promise<IOperatorService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreatePerformanceDataService(serviceConstructable: IPerformanceDataServiceConstructable): Promise<IPerformanceDataService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateWellService(serviceConstructable: IWellServiceConstructable): Promise<IWellService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  public static async CreateRawDataService(serviceConstructable: IRawDataServiceConstructable): Promise<IRawDataService> {
    await AppDataSource.initialize();
    return new serviceConstructable(AppDataSource);
  }

  //#endregion
}
