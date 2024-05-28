import ICarrier from "../../entities/interfaces/ICarrier"

export default interface ICarrierFactory {
  newCarrier(): ICarrier
}
