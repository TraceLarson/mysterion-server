import IPerformanceData from "./interface/IPerformanceData";
import IRawData from "./interface/IRawData";

export default class RawData implements IRawData {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";

  UpstreamPressure: number = 0;

  DownStreamPressure: number = 0;

  TubingPressure: number = 0;

  CasingPressure: number = 0;

  OilFlowRate: number = 0;

  WaterFlowRate: number = 0;

  TimeAdded: Date = new Date();

  PerformanceData: IPerformanceData;

  //#endregion

  //#region Virtual Methods

  //#endregion
}
