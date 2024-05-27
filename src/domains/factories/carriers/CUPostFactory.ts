import CUPost from "../../entities/carriers/CUPost"
import ICarrier from "../../entities/interfaces/ICarrier"
import CarrierFactory from "../CarrierFactory"

export default class CUPostFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new CUPost()
  }
}
