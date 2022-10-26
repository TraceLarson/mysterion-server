import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import IWellTraits from "../../domain/interface/IWellTraits";
import IWell from "../../domain/interface/IWell";
import { Well } from "./Well";

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

  @OneToOne(() => Well, (well) => well.Traits)
  Well: IWell;
}
