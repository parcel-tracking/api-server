import Daesin from "../../entities/carriers/Daesin"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class DaesinFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Daesin()
  }
}
