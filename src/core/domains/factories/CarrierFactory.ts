import ICarrier from "../entities/interfaces/ICarrier"
import ICarrierFactory from "./interfaces/ICarrierFactory"

export default abstract class CarrierFactory implements ICarrierFactory {
  newCarrier(): ICarrier {
    const carrier = this.createCarrier()
    return carrier
  }

  protected abstract createCarrier(): ICarrier
}
