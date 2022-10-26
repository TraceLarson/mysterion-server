import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import ILease from "../../domain/interface/ILease";
import IManager from "../../domain/interface/IManager";
import IOperator from "../../domain/interface/IOperator";
import IWell from "../../domain/interface/IWell";
import IWellTraits from "../../domain/interface/IWellTraits";
import { Manager } from "./Manager";
import { Operator } from "./Operator";
import { ProductionTypes } from "../../Constants";

@Entity()
export class Well implements IWell {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column("integer", { unique: true })
  Id: number;

  @Column()
  Name: string;

  @Column()
  Lease: ILease;

  @Column()
  ProductionType: ProductionTypes;

  @ManyToMany(() => Manager, (Manager) => Manager.Wells)
  @JoinTable()
  Managers: IManager[];

  @ManyToMany(() => Operator, (Operator) => Operator.Wells)
  @JoinTable()
  Operators: IOperator[];

  @Column()
  Traits: IWellTraits;

  @Column()
  IsActive: boolean;
}
