import ICarrierDTO from "../../../core/dtos/interfaces/ICarrierDTO"

export default interface ICarrierController {
  getCarriers(): Promise<ICarrierDTO[]>
}
