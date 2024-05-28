import Ilyanglogis from "../../entities/carriers/Ilyanglogis"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class IlyanglogisFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Ilyanglogis()
  }
}
