import ICarrier from "../../core/domains/entities/interfaces/ICarrier"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository"
import IServerHTTP from "../infrastructures/interfaces/IServerHTTP"
import CrawlerUtility from "../utilities/CrawlerUtility"

export default class TrackerRepository implements ITrackerRepository {
  constructor(protected readonly serverHTTP: IServerHTTP) {}

  getDelivery(
    carrier: ICarrier,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    const { name } = carrier
    return CrawlerUtility.getTrack(this.serverHTTP, name, trackingNumber)
  }
}
