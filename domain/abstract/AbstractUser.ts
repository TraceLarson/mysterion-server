import { PositionTypes } from "../../Constants";
import IUser from "../interface/IUser";

export abstract class AbstractUser implements IUser {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Password: string = "";
  Position: PositionTypes = PositionTypes.None;
  IsActive: boolean = false;

  //#endregion

  //#region Virtual Methods

  public GetFullName(): string {
    return `${this.FirstName} ${this.LastName}`;
  }

  //#endregion
}
