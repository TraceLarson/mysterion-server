import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import IPerformanceData from "../../domain/interface/IPerformanceData";
import IRawData from "../../domain/interface/IRawData";
import { RawData } from "./RawData";

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

  @OneToMany(() => RawData, (rawData) => rawData.PerformanceData)
  RawData: IRawData[];
}
