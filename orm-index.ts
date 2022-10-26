import "reflect-metadata";
import IUserService from "./domain/interface/IUserService";
import ServiceFactory from "./domain/factory/ServiceFactory";
import UserService from "./domain/service/UserService";
import IUser from "./domain/interface/IUser";
import User from "./domain/User";
import { PositionTypes } from "./Constants";

// AppDataSource.initialize()
//   .then(async () => {
(async () => {
  try {
    const userService: IUserService = await ServiceFactory.CreateUserService(UserService);

    const user: IUser = new User();
    user.Id = Math.floor(Math.random() * 100);
    user.Password = "123456";
    user.FirstName = "Emalyn";
    user.LastName = "Larson";
    user.Position = PositionTypes.Manager;
    user.IsActive = true;

    await userService.CreateNewUser(user);

    const storedUsers: IUser[] = await userService.GetUsers();
    const firstUser = storedUsers[0] as User;
    console.log(`First Stored User:`);
    console.log(`${firstUser.Id}\r\n${firstUser.GetFullName()}`);
  } catch (error: any) {
    console.log(error);
  }
})();

// })
// .catch((error) => console.log(error));

// AppDataSource.initialize()
//   .then(async () => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.Id = 1;
//     user.FirstName = "Timber";
//     user.LastName = "Saw";
//     user.Position = PositionTypes.None;
//     user.Password = "123";
//     user.IsActive = true;
//     await AppDataSource.manager.save(user);
//     console.log("Saved a new user with Recordid: " + user.RecordId);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log(
//       "Here you can setup and run express / fastify / any other framework."
//     );
//   })
//   .catch((error) => console.log(error));
