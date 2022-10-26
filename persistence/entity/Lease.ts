import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import ILease from "../../domain/interface/ILease";
import IManager from "../../domain/interface/IManager";
import IOperator from "../../domain/interface/IOperator";
import IWell from "../../domain/interface/IWell";
import { Manager } from "./Manager";
import { Operator } from "./Operator";
import { Well } from "./Well";

@Entity()
export class Lease implements ILease {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column("integer", { unique: true })
  Id: number;

  @Column()
  Name: string;

  @ManyToMany(() => Manager, (Manager) => Manager.Wells)
  @JoinTable()
  Managers: IManager[];

  @ManyToMany(() => Operator, (Operator) => Operator.Wells)
  @JoinTable()
  Operators: IOperator[];

  @OneToMany(() => Well, (Well) => Well.Lease)
  @JoinTable()
  Wells: IWell[];

  @Column()
  IsActive: boolean;
}
