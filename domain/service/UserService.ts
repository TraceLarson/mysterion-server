import "reflect-metadata";
import { PositionTypes } from "../../Constants";
import IUser from "../interfaces/IUser";
import IUserService from "../interfaces/IUserService";
import User from "../User";
import { User as UserEntity } from "../../persistence/entity/User";
import { DataSource } from "typeorm";
import Manager from "../Manager";
import { randomUUID } from "crypto";

export default class UserService implements IUserService {
  //#region Constructors

  constructor(appDataSource: DataSource) {
    this.AppDataSource = appDataSource;
  }

  //#endregion

  //#region Properties

  AppDataSource: DataSource;

  //#endregion

  //#region Public Methods

  public async CreateNewUser(): Promise<void> {
    const user: IUser = new UserEntity();
    user.Id = Math.floor(Math.random() * 100);
    user.Password = "123456";
    user.FirstName = "Hailey";
    user.LastName = "Larson";
    user.Position = PositionTypes.Admin;
    user.IsActive = true;

    const userRepository = this.AppDataSource.getRepository(UserEntity);
    await userRepository.save(user);
    console.log("Saved a new user with Recordid: " + user.RecordId);

    const savedUsers: IUser[] = await userRepository.find();
    savedUsers.forEach((su) => console.log(su.RecordId));
  }

  public GetUser(userRecordId?: string): IUser {
    // interact with unit of work to recover user

    // create a mock user
    const user: IUser = new User();
    user.RecordId = userRecordId;
    user.Id = 1;
    user.FirstName = "Alejandro";
    user.LastName = "Perez";

    return user;
  }

  public SetUserPositionType(user: IUser, position: PositionTypes) {
    const storedUser = this.GetUser(user.RecordId);
    storedUser.Position = position;
    // Commit stored User back to DB
    // UnitOfWork.UpdateUser(storedUser);
  }

  //#endregion
}
