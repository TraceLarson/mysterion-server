import "reflect-metadata";
import { AppDataSource } from "./data-source";
import IUserService from "./domain/interfaces/IUserService";
import ServiceFactory from "./domain/factory/ServiceFactory";
import UserService from "./domain/service/UserService";

AppDataSource.initialize()
  .then(async () => {
    const userService: IUserService = ServiceFactory.CreateUserService(UserService, AppDataSource);
    userService.CreateNewUser();
  })
  .catch((error) => console.log(error));

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
