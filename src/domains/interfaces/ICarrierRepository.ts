import ICarrierDTO from "../dtos/interfaces/ICarrierDTO"

export default interface ICarrierRepository {
  getCarriers(): Promise<ICarrierDTO[]>
}
