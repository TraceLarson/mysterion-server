import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import ILease from "../../domain/interface/ILease";
import IManager from "../../domain/interface/IManager";
import IOperator from "../../domain/interface/IOperator";
import IPerformanceData from "../../domain/interface/IPerformanceData";
import IWell from "../../domain/interface/IWell";
import IWellTraits from "../../domain/interface/IWellTraits";
import { Lease } from "./Lease";
import { Manager } from "./Manager";
import { Operator } from "./Operator";
import { PerformanceData } from "./PerformanceData";
import { ProductionTypes } from "../../Constants";
import { WellTraits } from "./WellTraits";

@Entity()
export class Well implements IWell {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column("integer", { unique: true })
  Id: number;

  @Column()
  Name: string;

  @ManyToOne(() => Lease, (lease) => lease.Wells)
  Lease: ILease;

  @Column()
  ProductionType: ProductionTypes;

  @ManyToMany(() => Manager, (Manager) => Manager.Wells)
  @JoinTable()
  Managers: IManager[];

  @ManyToMany(() => Operator, (Operator) => Operator.Wells)
  @JoinTable()
  Operators: IOperator[];

  @OneToOne(() => WellTraits, (wellTraits) => wellTraits.Well)
  @JoinColumn()
  Traits: IWellTraits;

  @OneToOne(() => PerformanceData, (performanceData) => performanceData.Well)
  @JoinColumn()
  PerformanceData: IPerformanceData;

  @Column()
  IsActive: boolean;
}
