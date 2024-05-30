import ICarrierDTO from "./interfaces/ICarrierDTO"

export default class CarrierDTO implements ICarrierDTO {
  constructor(
    readonly no: number,
    readonly name: string,
    readonly displayName: string,
    readonly isCrawlable: boolean,
    readonly isPopupEnabled: boolean,
    readonly popupURL: string
  ) {}
}
