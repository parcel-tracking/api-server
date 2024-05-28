import CJLogistics from "../../entities/carriers/CJLogistics"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class CJLogisticsFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new CJLogistics()
  }
}
