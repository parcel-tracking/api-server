import Lotte from "../../entities/carriers/Lotte"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class LotteFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Lotte()
  }
}
