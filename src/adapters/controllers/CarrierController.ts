import NCarrierUseCase from "../../frameworks/usecases/NCarrierUseCase"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"

export class CarriersController {
  constructor(private readonly carriersUseCase: NCarrierUseCase) {}

  async getCarriers(): Promise<ICarrierDTO[]> {
    return await this.carriersUseCase.getCarriers()
  }
}
