import { IUser } from "../IUser";

export abstract class AbstractUser implements IUser {
  RecordId: number = 0;
  ID: number = 0;
  FullName: string = "";
  FirstName: string = "";
  LastName: string = "";
}
