import { Injectable } from "@nestjs/common"
import TrackerRepository from "../../adapters/repositories/TrackerRepository"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../core/dtos/interfaces/IErrorDTO"

@Injectable()
export default class NTrackerRepository extends TrackerRepository {
  async getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO> {
    return super.getDelivery(carrierId, trackingNumber)
  }
}
