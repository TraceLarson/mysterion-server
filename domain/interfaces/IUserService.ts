import IUser from "./IUser";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IUserService {
  CreateNewUser(): void;
  GetUser(userRecordId: string): IUser;
  SetUserPositionType(user: IUser, position: PositionTypes): void;
}

export interface IUserServiceConstructable {
  new (appDataSource: DataSource): IUserService;
}
