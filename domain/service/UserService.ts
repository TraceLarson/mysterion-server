import "reflect-metadata";
import { PositionTypes } from "../../Constants";
import IUser from "../interface/IUser";
import IUserService from "../interface/IUserService";
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

  public async CreateNewUser(newUser: IUser): Promise<void> {
    let user: IUser = new UserEntity();
    user = this.MapUserProperties(user, newUser);

    await this.Repository.save(user);
    console.log("Saved a new user with Recordid: " + user.RecordId);

    console.log(`Current users:\r\n`);
    const savedUsers: IUser[] = await this.Repository.find();
    savedUsers.forEach((su) => console.log(`${su.RecordId} : ${su.FirstName} ${su.LastName}`));
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

    return this.CreateDomainCopy(foundUser);
  }

  public async GetUsers(): Promise<IUser[] | []> {
    const foundUsers: IUser[] = await this.Repository.find();

    // guard clause - user not found
    if (foundUsers == null) {
      return [];
    }

    let foundDomainUsers: IUser[] = foundUsers.map((fu) => this.CreateDomainCopy(fu));

    return foundDomainUsers;
  }

  public async UpdateUser(user: IUser, otherUser: IUser) {
    const storedUser: IUser | null = await this.GetUser(user.RecordId);

    // guard clause - stored user not found
    if (!storedUser) {
      return;
    }

    const updatedUser: IUser = this.MapUserProperties(storedUser, otherUser);

    await this.Repository.save(updatedUser);
  }

  public async UpdateUserActiveStatus(user: IUser, isActive: boolean) {
    const storedUser: IUser | null = await this.GetUser(user.RecordId);

    // guard clause - stored user not found
    if (!storedUser) {
      return;
    }

    storedUser.IsActive = isActive;

    await this.Repository.save(storedUser);
  }

  public async UpdateUserPositionType(user: IUser, position: PositionTypes) {
    const storedUser: IUser | null = await this.GetUser(user.RecordId);

    // guard clause - stored user not found
    if (!storedUser) {
      return;
    }

    storedUser.Position = position;

    await this.Repository.save(storedUser);
  }

  public async DeleteUser(user: IUser) {
    const storedUser: IUser | null = await this.GetUser(user.RecordId);

    // guard clause - stored user not found
    if (!storedUser) {
      return;
    }

    await this.Repository.delete(storedUser);
  }

  //#endregion

  //#region Private Methods

  private CreateDomainCopy(foundUser: IUser): IUser {
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

  private MapUserProperties(producedUser: IUser, sourceUser: IUser): IUser {
    producedUser.Id = sourceUser.Id;
    producedUser.FirstName = sourceUser.FirstName;
    producedUser.LastName = sourceUser.LastName;
    producedUser.Password = sourceUser.Password;
    producedUser.Position = sourceUser.Position;
    producedUser.IsActive = sourceUser.IsActive;

    return producedUser;
  }

  //#endregion
}
