import { AbstractUser } from "./abstract/AbstractUser";
import { PositionTypes } from "../Constants";
import IUser from "./interfaces/IUser";
import ServiceFactory from "./factory/ServiceFactory";
import IUserService from "./interfaces/IUserService";

export class Admin extends AbstractUser {
  //#region Constructors

  constructor() {
    super();
  }

  //#endregion

  //#region Overridden Methods

  public override GetFullName(): string {
    return `${this.FirstName}, ${this.LastName}`;
  }

  //#endregion

  //#region Public Methods

  public SetUserPosition(userRecordId: string, position: PositionTypes): void {
    const userService: IUserService = ServiceFactory.CreateUserService();
    const user: IUser = userService.GetUser(userRecordId);
    userService.SetUserPositionType(user, position);
  }

  //#endregion
}
