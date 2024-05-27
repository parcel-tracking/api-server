import KDExp from "../../entities/carriers/KDExp"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class KDExpFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new KDExp()
  }
}
