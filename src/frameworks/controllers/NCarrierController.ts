import { Controller, Get, Param } from "@nestjs/common"
import CarriersController from "../../adapters/controllers/CarrierController"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import NCarrierUseCase from "../usecases/NCarrierUseCase"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"

@Controller("")
export default class NCarriersController extends CarriersController {
  constructor(carriersUseCase: NCarrierUseCase) {
    super(carriersUseCase)
  }

  @Get("carriers")
  async getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>> {
    return super.getCarriers()
  }

  @Get("carrier/:carrierId")
  async getCarrier(
    @Param("carrierId") carrierId: string
  ): Promise<ILayerDTO<ICarrierDTO>> {
    return super.getCarrier(carrierId)
  }
}
