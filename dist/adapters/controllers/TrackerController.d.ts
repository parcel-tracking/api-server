import ITrackerUseCase from "../../core/domains/usecases/interfaces/ITrackerUseCase";
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import ITrackerController from "./interfaces/ITrackerController";
export default class TrackerController implements ITrackerController {
    private readonly trackerUseCase;
    constructor(trackerUseCase: ITrackerUseCase);
    getDelivery(carrierId: string, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
