import ICarrierDTO from "../../../dtos/interfaces/ICarrierDTO"
import IErrorDTO from "../../../dtos/interfaces/IErrorDTO"

export default interface ICarrierUseCase {
  getCarriers(): Promise<ICarrierDTO[] | IErrorDTO>
}
