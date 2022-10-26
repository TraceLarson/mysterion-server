import IWell from "./IWell";

export default interface IWellTraits {
  RecordId?: string | undefined;

  TubingId: number;

  TubingOd: number;

  CasingId: number;

  CasingOd: number;

  Latitude: number;

  Longitude: number;

  OrificeSize: number;

  MeterRunSize: number;

  Well: IWell;
}
