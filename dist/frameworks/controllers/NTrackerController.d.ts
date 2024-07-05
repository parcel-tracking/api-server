import TrackerController from "../../adapters/controllers/TrackerController";
import NTrackerUseCase from "../usecases/NTrackerUseCase";
import IDeliveryDTO from "../../core/dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
export default class NTrackerController extends TrackerController {
    constructor(trackerUseCase: NTrackerUseCase);
    getDelivery(carrierId: string, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
}
