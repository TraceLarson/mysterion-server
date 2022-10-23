import { PositionTypes } from "../../Constants";

export interface IUser {
  RecordId: number;
  ID: number;
  FirstName: string;
  LastName: string;
  Position: PositionTypes;
  Password: string;
}
