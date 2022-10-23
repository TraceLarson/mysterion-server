import IUserService from "../service/IUserService";
import UserService from "../service/UserService";

export default class ServiceFactory {
  //#region PublicMethods
  public static CreateUserService(): IUserService {
    return new UserService();
  }
  //#endregion
}
