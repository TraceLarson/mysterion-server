import IWell from "./interface/IWell";
import IWellTraits from "./interface/IWellTraits";
import Well from "./Well";

export default class WellTraits implements IWellTraits {
  //#region Constructors

  constructor() {}

  //#endregion

  //#region Properties

  RecordId: string = "";

  TubingId: number = 0;

  TubingOd: number = 0;

  CasingId: number = 0;

  CasingOd: number = 0;

  Latitude: number = 0;

  Longitude: number = 0;

  OrificeSize: number = 0;

  MeterRunSize: number = 0;

  Well: IWell = new Well();

  //#endregion

  //#region Virtual Methods

  //#endregion
}
