import GSPostbox from "../../entities/carriers/GSPostbox"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class GSPostboxFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new GSPostbox()
  }
}
