import IPerformanceData from "./interface/IPerformanceData";
import IRawData from "./interface/IRawData";
import RawData from "./RawData";

export default class PerformanceData implements IPerformanceData {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";

  StaticPressure: number = 0;

  LinePressure: number = 0;

  TubingPressure: number = 0;

  CasingPressure: number = 0;

  GasVolume: number = 0;

  OilVolume: number = 0;

  WaterVolume: number = 0;

  Fuel: number = 0;

  Interval: number = 0;

  RawData: IRawData[] = [];

  //#endregion

  //#region Virtual Methods

  //#endregion
}
