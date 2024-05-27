import EPost from "../../entities/carriers/EPost"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class EPostFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new EPost()
  }
}
