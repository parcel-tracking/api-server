import ITrackerUseCase from "../../core/domains/usecases/interfaces/ITrackerUseCase"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../core/dtos/interfaces/IErrorDTO"
import ITrackerController from "./interfaces/ITrackerController"

export default class TrackerController implements ITrackerController {
  constructor(private readonly trackerUseCase: ITrackerUseCase) {}

  async getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO> {
    return await this.trackerUseCase.getDelivery(carrierId, trackingNumber)
  }
}
