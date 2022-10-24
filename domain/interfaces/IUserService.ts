import IUser from "./IUser";
import { PositionTypes } from "../../Constants";

export default interface IUserService {
  GetUser(userRecordId: number): IUser;
  SetUserPositionType(user: IUser, position: PositionTypes): void;
}
