import "reflect-metadata";
import { DataSource } from "typeorm";
import { Lease } from "./persistence/entity/Lease";
import { Manager } from "./persistence/entity/Manager";
import { Operator } from "./persistence/entity/Operator";
import { PerformanceData } from "./persistence/entity/PerformanceData";
import { RawData } from "./persistence/entity/RawData";
import { User } from "./persistence/entity/User";
import { Well } from "./persistence/entity/Well";
import { WellTraits } from "./persistence/entity/WellTraits";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Lease, Manager, Operator, PerformanceData, RawData, User, Well, WellTraits],
  migrations: [],
  subscribers: [],
});
