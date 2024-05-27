import EMS from "../../entities/carriers/EMS"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class EMSFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new EMS()
  }
}
