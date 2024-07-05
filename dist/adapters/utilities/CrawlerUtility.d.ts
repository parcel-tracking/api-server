import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import IServerHTTP from "../infrastructures/interfaces/IServerHTTP";
export default class CrawlerUtility {
    static getTrack(serverHTTP: IServerHTTP, carrierName: string, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
