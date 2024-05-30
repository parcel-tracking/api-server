import ICarrier from "./interfaces/ICarrier"

export default class Carrier implements ICarrier {
  constructor(
    readonly no: number,
    readonly name: string,
    readonly displayName: string,
    readonly isCrawlable: boolean,
    readonly isPopupEnabled: boolean,
    readonly popupURL: string
  ) {}
}
