import IRawData from "./IRawData";
import IWell from "./IWell";

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

  Well: IWell;

  RawData: IRawData[];
}
