import { PositionTypes } from "../../Constants";
import IUser from "../interfaces/IUser";

export abstract class AbstractUser implements IUser {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";
  ID: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Password: string = "";
  Position: PositionTypes = PositionTypes.None;

  //#endregion

  //#region Virtual Methods

  public GetFullName(): string {
    return `${this.FirstName} ${this.LastName}`;
  }

  //#endregion
}
