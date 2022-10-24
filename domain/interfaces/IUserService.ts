import IUser from "./IUser";
import { PositionTypes } from "../../Constants";

export default interface IUserService {
  GetUser(userRecordId: string): IUser;
  SetUserPositionType(user: IUser, position: PositionTypes): void;
}
