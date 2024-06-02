import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import CJLogisticsCrawler from "./crawlers/CJLogisticsCrawler"
import DaesinCrawler from "./crawlers/DaesinCrawler"
import EPostCrawler from "./crawlers/EPostCrawler"
import HanjinCrawler from "./crawlers/HanjinCrawler"
import KDExpCrawler from "./crawlers/KDexpCrawler"
import LotteCrawler from "./crawlers/LotteCrawler"

export default class CrawlerUtility {
  static getTrack(
    carrierName: string,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    switch (carrierName) {
      case "epost":
        return new EPostCrawler().getTrack(trackingNumber)
      case "cjlogistics":
        return new CJLogisticsCrawler().getTrack(trackingNumber)
      case "hanjin":
        return new HanjinCrawler().getTrack(trackingNumber)
      case "lotte":
        return new LotteCrawler().getTrack(trackingNumber)
      case "kdexp":
        return new KDExpCrawler().getTrack(trackingNumber)
      case "daesin":
        return new DaesinCrawler().getTrack(trackingNumber)
    }
  }
}
