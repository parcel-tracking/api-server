import TrackerRepository from "../../adapters/repositories/TrackerRepository";
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import ICarrier from "../../core/domains/entities/interfaces/ICarrier";
import IServerHTTP from "../../adapters/infrastructures/interfaces/IServerHTTP";
export default class NTrackerRepository extends TrackerRepository {
    constructor(serverHTTP: IServerHTTP);
    getDelivery(carrier: ICarrier, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
