import ICarrier from "./interfaces/ICarrier"

export default abstract class Carrier implements ICarrier {
  constructor(
    readonly no: number,
    readonly id: string,
    readonly name: string,
    readonly isCrawlable: boolean,
  ) {}

  abstract getPopupURL(trackingNumber: string): string
}
