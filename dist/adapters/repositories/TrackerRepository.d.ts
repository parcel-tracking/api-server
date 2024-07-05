import ICarrier from "../../core/domains/entities/interfaces/ICarrier";
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository";
import IServerHTTP from "../infrastructures/interfaces/IServerHTTP";
export default class TrackerRepository implements ITrackerRepository {
    protected readonly serverHTTP: IServerHTTP;
    constructor(serverHTTP: IServerHTTP);
    getDelivery(carrier: ICarrier, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
