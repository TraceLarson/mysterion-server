import IPerformanceData from "./IPerformanceData";

export default interface IRawData {
  RecordId?: string | undefined;

  UpstreamPressure: number;

  DownStreamPressure: number;

  TubingPressure: number;

  CasingPressure: number;

  OilFlowRate: number;

  WaterFlowRate: number;

  TimeAdded: Date;

  PerformanceData: IPerformanceData;
}
