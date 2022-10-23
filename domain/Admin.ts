import { AbstractUser } from "./abstract/AbstractUser";
import { PositionTypes } from "../Constants";
import IUser from "./interfaces/IUser";
import ServiceFactory from "./factory/ServiceFactory";
import IUserService from "./service/IUserService";

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
  public SetUserPosition(userRecordId: number, position: PositionTypes): void {
    let userService: IUserService = ServiceFactory.CreateUserService();
  }

  //#endregion
}
