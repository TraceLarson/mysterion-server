import "reflect-metadata";
import IUserService, { IUserServiceConstructable } from "../interfaces/IUserService";
import { DataSource } from "typeorm";

export default class ServiceFactory {
  //#region PublicMethods

  public static CreateUserService(serviceConstructable: IUserServiceConstructable, appDataSource: DataSource): IUserService {
    return new serviceConstructable(appDataSource);
  }

  //#endregion
}
