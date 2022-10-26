import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import IWellTraits from "../../domain/interface/IWellTraits";

@Entity()
export class WellTraits implements IWellTraits {
  @PrimaryGeneratedColumn("uuid")
  RecordId: string;

  @Column()
  TubingId: number;

  @Column()
  TubingOd: number;

  @Column()
  CasingId: number;

  @Column()
  CasingOd: number;

  @Column()
  Latitude: number;

  @Column()
  Longitude: number;

  @Column()
  OrificeSize: number;

  @Column()
  MeterRunSize: number;
}
