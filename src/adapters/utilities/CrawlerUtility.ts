import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import IServerHTTP from "../infrastructures/interfaces/IServerHTTP"
import CJLogisticsCrawler from "./crawlers/CJLogisticsCrawler"
import DaesinCrawler from "./crawlers/DaesinCrawler"
import EPostCrawler from "./crawlers/EPostCrawler"
import HanjinCrawler from "./crawlers/HanjinCrawler"
import KDExpCrawler from "./crawlers/KDexpCrawler"
import LogenCrawler from "./crawlers/LogenCrawler"
import LotteCrawler from "./crawlers/LotteCrawler"

export default class CrawlerUtility {
  static getTrack(
    serverHTTP: IServerHTTP,
    carrierName: string,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>> {
    switch (carrierName) {
      case "epost":
        return new EPostCrawler(serverHTTP).getTrack(trackingNumber)
      case "cjlogistics":
        return new CJLogisticsCrawler(serverHTTP).getTrack(trackingNumber)
      case "hanjin":
        return new HanjinCrawler(serverHTTP).getTrack(trackingNumber)
      case "lotte":
        return new LotteCrawler(serverHTTP).getTrack(trackingNumber)
      case "kdexp":
        return new KDExpCrawler(serverHTTP).getTrack(trackingNumber)
      case "daesin":
        return new DaesinCrawler(serverHTTP).getTrack(trackingNumber)
      case "logen":
        return new LogenCrawler(serverHTTP).getTrack(trackingNumber)
    }
  }
}
