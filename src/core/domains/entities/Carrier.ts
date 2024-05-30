import ICarrier from "./interfaces/ICarrier"

export default class Carrier implements ICarrier {
  constructor(
    readonly no: number,
    readonly id: string,
    readonly name: string,
    readonly isCrawlable: boolean,
    readonly isPopupEnabled: boolean,
    readonly popupURL: string
  ) {}
}
