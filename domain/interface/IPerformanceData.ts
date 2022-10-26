import IRawData from "./IRawData";

export default interface IPerformanceData {
  RecordId?: string | undefined;

  StaticPressure: number;

  LinePressure: number;

  TubingPressure: number;

  CasingPressure: number;

  GasVolume: number;

  OilVolume: number;

  WaterVolume: number;

  Fuel: number;

  Interval: number;

  RawData: IRawData[];
}
