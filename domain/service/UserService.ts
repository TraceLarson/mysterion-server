import { PositionTypes } from "../../Constants";
import IUser from "../interfaces/IUser";
import IUserService from "../interfaces/IUserService";
import User from "../User";

export default class UserService implements IUserService {
  //#region Public Methods

  public GetUser(userRecordId: number): IUser {
    // interact with unit of work to recover user

    // create a mock user
    const user: IUser = new User();
    user.RecordId = userRecordId;
    user.Id = 1;
    user.FirstName = "Alejandro";
    user.LastName = "Perez";

    return user;
  }

  public SetUserPositionType(user: IUser, position: PositionTypes) {
    const storedUser = this.GetUser(user.RecordId);
    storedUser.Position = position;
    // Commit stored User back to DB
    // UnitOfWork.UpdateUser(storedUser);
  }

  //#endregion
}
