import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO";
import IServerHTTP from "../../infrastructures/interfaces/IServerHTTP";
import ICrawler from "./interfaces/ICrawler";
export default class LogenCrawler implements ICrawler {
    private readonly serverHTTP;
    constructor(serverHTTP: IServerHTTP);
    getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
    private parseLocationName;
    private parseDateTime;
    private parseStatus;
}
