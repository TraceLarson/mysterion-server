import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import ILease from "../../domain/interface/ILease";
import IManager from "../../domain/interface/IManager";
import IOperator from "../../domain/interface/IOperator";
import IWell from "../../domain/interface/IWell";
import { Lease } from "./Lease";
import { Operator } from "./Operator";
import { PositionTypes } from "../../Constants";
import { Well } from "./Well";

@Entity()
export class Manager implements IManager {
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

  @ManyToMany(() => Manager, (Manager) => Manager.Wells)
  @JoinTable()
  Managers: IManager[];

  @ManyToMany(() => Operator, (Operator) => Operator.Wells)
  @JoinTable()
  Operators: IOperator[];

  @ManyToMany(() => Lease, (Lease) => Lease.Wells)
  @JoinTable()
  Leases: ILease[];

  @ManyToMany(() => Well, (Well) => Well.Operators)
  @JoinTable()
  Wells: IWell[];
}
