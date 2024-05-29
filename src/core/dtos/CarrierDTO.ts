import ICarrier from "../domains/entities/interfaces/ICarrier"
import ICarrierDTO from "./interfaces/ICarrierDTO"

export default class CarrierDTO implements ICarrierDTO {
  constructor(
    readonly no: number,
    readonly id: string,
    readonly name: string,
    readonly isCrawlable: boolean
  ) {}
}
