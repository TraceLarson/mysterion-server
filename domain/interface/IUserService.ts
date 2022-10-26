import IUser from "./IUser";
import { PositionTypes } from "../../Constants";
import { DataSource } from "typeorm";

export default interface IUserService {
  CreateNewUser(newUser: IUser): Promise<void>;

  GetUser(userRecordId: string): Promise<IUser | null>;

  GetUsers(): Promise<IUser[] | []>;

  UpdateUser(user: IUser, otherUser: IUser): Promise<void>;

  UpdateUserActiveStatus(user: IUser, isActive: boolean): Promise<void>;

  UpdateUserPositionType(user: IUser, position: PositionTypes): Promise<void>;

  DeleteUser(user: IUser): Promise<void>;
}

export interface IUserServiceConstructable {
  new (appDataSource: DataSource): IUserService;
}
