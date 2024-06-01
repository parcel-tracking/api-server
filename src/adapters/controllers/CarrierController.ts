import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import ICarrierRepository from "../../core/repositories/interfaces/ICarrierRepository"
import ICarrierController from "./interfaces/ICarrierController"

export default class CarriersController implements ICarrierController {
  constructor(private readonly carriersUseCase: ICarrierRepository) {}

  async getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>> {
    return await this.carriersUseCase.getCarriers()
  }
}
