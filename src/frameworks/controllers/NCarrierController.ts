import { Controller, Get } from "@nestjs/common"
import CarriersController from "../../adapters/controllers/CarrierController"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import NCarrierUseCase from "../usecases/NCarrierUseCase"

@Controller("carrier")
export default class NCarriersController extends CarriersController {
  constructor(carriersUseCase: NCarrierUseCase) {
    super(carriersUseCase)
  }

  @Get("")
  async getCarriers(): Promise<ICarrierDTO[]> {
    return super.getCarriers()
  }
}
