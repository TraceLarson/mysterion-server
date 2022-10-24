import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import IUser from "../../../domain/interfaces/IUser";
import { PositionTypes } from "../../../Constants";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  RecordId: number;

  @Column()
  Id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Position: PositionTypes;

  @Column()
  Password: string;
}
