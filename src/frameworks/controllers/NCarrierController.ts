import { Controller, Get } from "@nestjs/common"
import NestCarrierUseCase from "../usecases/NCarrierUseCase"
import { CarriersController } from "../../adapters/controllers/CarrierController"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"

@Controller("carrier")
export class NCarriersController extends CarriersController {
  constructor(carriersUseCase: NestCarrierUseCase) {
    super(carriersUseCase)
  }

  @Get("getCarriers")
  async getCarriers(): Promise<ICarrierDTO[]> {
    return super.getCarriers()
  }
}
