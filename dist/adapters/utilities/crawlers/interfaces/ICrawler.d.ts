import IDeliveryDTO from "../../../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../../../core/dtos/interfaces/ILayerDTO";
export default interface ICrawler {
    getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
