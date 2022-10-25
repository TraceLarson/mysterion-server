import "reflect-metadata";
import { PositionTypes } from "../../Constants";
import IUser from "../interfaces/IUser";
import IUserService from "../interfaces/IUserService";
import User from "../User";
import { User as UserEntity } from "../../persistence/entity/User";
import { DataSource, Repository } from "typeorm";

export default class UserService implements IUserService {
  //#region Constructors

  constructor(appDataSource: DataSource) {
    this.AppDataSource = appDataSource;
    this.Repository = this.AppDataSource.getRepository<UserEntity>(UserEntity);
  }

  //#endregion

  //#region Properties

  AppDataSource: DataSource;

  Repository: Repository<UserEntity>;

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

    // const userRepository = this.AppDataSource.getRepository(UserEntity);
    await this.Repository.save(user);
    console.log("Saved a new user with Recordid: " + user.RecordId);

    const savedUsers: IUser[] = await this.Repository.find();
    savedUsers.forEach((su) => console.log(su.RecordId));
  }

  public async GetUser(userRecordId?: string): Promise<IUser | null> {
    // guard clause - user RecordId is null
    if (!userRecordId) {
      return null;
    }

    const foundUser = await this.Repository.findOneBy({ RecordId: userRecordId });

    // guard clause - user not found
    if (foundUser == null) {
      return null;
    }

    return this.DomainCopy(foundUser);
  }

  public async UpdateUserPositionType(user: IUser, position: PositionTypes) {
    const storedUser = await this.GetUser(user.RecordId);

    // guard clause - stored user not found
    if (!storedUser) {
      return;
    }

    storedUser.Position = position;

    await this.Repository.save(storedUser);
  }

  //#endregion

  //#region Private Methods

  private DomainCopy(foundUser: IUser): IUser {
    const userDomain: IUser = new User();

    userDomain.RecordId = foundUser.RecordId;
    userDomain.Id = foundUser.Id;
    userDomain.FirstName = foundUser.FirstName;
    userDomain.LastName = foundUser.LastName;
    userDomain.Password = foundUser.Password;
    userDomain.Position = foundUser.Position;
    userDomain.IsActive = foundUser.IsActive;

    return userDomain;
  }

  //#endregion
}
