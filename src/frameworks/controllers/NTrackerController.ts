import { Controller, Get, Param } from "@nestjs/common"
import TrackerController from "../../adapters/controllers/TrackerController"
import NTrackerUseCase from "../usecases/NTrackerUseCase"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"

@Controller("tracker")
export default class NTrackerController extends TrackerController {
  constructor(trackerUseCase: NTrackerUseCase) {
    super(trackerUseCase)
  }

  @Get(":carrierId/:trackingNumber")
  async getDelivery(
    @Param("carrierId") carrierId: string,
    @Param("trackingNumber") trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    return super.getDelivery(carrierId, trackingNumber)
  }
}
