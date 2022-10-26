import IWellTraits from "./interface/IWellTraits";

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

  //#endregion

  //#region Virtual Methods

  //#endregion
}
