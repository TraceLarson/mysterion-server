import { PositionTypes } from "../../Constants";

export default interface IUser {
  RecordId?: string | undefined;

  Id: number;

  FirstName: string;

  LastName: string;

  Position: PositionTypes;

  Password: string;

  IsActive: boolean;
}
