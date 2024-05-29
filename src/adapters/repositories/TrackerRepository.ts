import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../core/dtos/interfaces/IErrorDTO"
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository"
import EPostCrawler from "../utilities/crawlers/EPostCrawler"

export default class TrackerRepository implements ITrackerRepository {
  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO> {
    return new Promise((resolve, reject) => {
      const delivery = new EPostCrawler().getTrack("6099706366934")
      resolve(delivery)
    })
  }
}
