import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";
import IUser from "../../domain/interfaces/IUser";
import { PositionTypes } from "../../Constants";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column("integer", { unique: true })
  Id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Position: PositionTypes;

  @Column()
  Password: string;

  @Column()
  IsActive: boolean;
}
