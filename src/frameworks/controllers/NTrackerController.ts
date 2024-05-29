import { Controller, Get, Param } from "@nestjs/common"
import TrackerController from "../../adapters/controllers/TrackerController"
import NTrackerUseCase from "../usecases/NTrackerUseCase"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../core/dtos/interfaces/IErrorDTO"

@Controller("tracker")
export default class NTrackerController extends TrackerController {
  constructor(trackerUseCase: NTrackerUseCase) {
    super(trackerUseCase)
  }

  @Get(":carrierId/:trackingNumber")
  async getDelivery(
    @Param("carrierId") carrierId: string,
    @Param("trackingNumber") trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO> {
    return super.getDelivery(carrierId, trackingNumber)
  }
}
