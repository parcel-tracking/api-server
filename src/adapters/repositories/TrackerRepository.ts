import ICarrier from "../../core/domains/entities/interfaces/ICarrier"
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository"
import CrawlerUtility from "../utilities/CrawlerUtility"

export default class TrackerRepository implements ITrackerRepository {
  getDelivery(
    carrier: ICarrier,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    const { name } = carrier
    return CrawlerUtility.getTrack(name, trackingNumber)
  }
}
