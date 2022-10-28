import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import IPerformanceData from "../../domain/interface/IPerformanceData";
import IRawData from "../../domain/interface/IRawData";
import IWell from "../../domain/interface/IWell";
import { RawData } from "./RawData";
import { Well } from "./Well";

@Entity()
export class PerformanceData implements IPerformanceData {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column()
  StaticPressure: number;

  @Column()
  LinePressure: number;

  @Column()
  TubingPressure: number;

  @Column()
  CasingPressure: number;

  @Column()
  GasVolume: number;

  @Column()
  OilVolume: number;

  @Column()
  WaterVolume: number;

  @Column()
  Fuel: number;

  @Column()
  Interval: number;

  @OneToOne(() => Well, (well) => well.PerformanceData)
  Well: IWell;

  @OneToMany(() => RawData, (rawData) => rawData.PerformanceData)
  RawData: IRawData[];
}
