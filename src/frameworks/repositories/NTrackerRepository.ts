import { Inject, Injectable } from "@nestjs/common"
import TrackerRepository from "../../adapters/repositories/TrackerRepository"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import ICarrier from "../../core/domains/entities/interfaces/ICarrier"
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP"

@Injectable()
export default class NTrackerRepository extends TrackerRepository {
  constructor(@Inject("IServerHTTP") serverHTTP: IServerHTTP) {
    super(serverHTTP)
  }

  async getDelivery(
    carrier: ICarrier,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    return super.getDelivery(carrier, trackingNumber)
  }
}
