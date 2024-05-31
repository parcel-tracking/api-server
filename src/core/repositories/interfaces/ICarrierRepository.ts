import ICarrier from "../../domains/entities/interfaces/ICarrier"

export default interface ICarrierRepository {
  getCarriers?(): Promise<ICarrier[]>
}
