import Hanjin from "../../entities/carriers/Hanjin"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class HanjinFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Hanjin()
  }
}
