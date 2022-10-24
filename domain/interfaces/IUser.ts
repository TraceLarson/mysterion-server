import { PositionTypes } from "../../Constants";

export default interface IUser {
  RecordId: string;
  ID: number;
  FirstName: string;
  LastName: string;
  Position: PositionTypes;
  Password: string;
}
