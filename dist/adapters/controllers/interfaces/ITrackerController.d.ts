import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO";
export default interface ITrackerController {
    getDelivery(carrierId: string, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
