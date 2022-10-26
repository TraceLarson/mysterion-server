import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import IPerformanceData from "../../domain/interface/IPerformanceData";
import IRawData from "../../domain/interface/IRawData";
import { PerformanceData } from "./PerformanceData";

@Entity()
export class RawData implements IRawData {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column()
  UpstreamPressure: number;

  @Column()
  DownStreamPressure: number;

  @Column()
  TubingPressure: number;

  @Column()
  CasingPressure: number;

  @Column()
  OilFlowRate: number;

  @Column()
  WaterFlowRate: number;

  @CreateDateColumn()
  TimeAdded: Date;

  @ManyToOne(() => PerformanceData, (performanceData) => performanceData.RawData)
  PerformanceData: IPerformanceData;
}
