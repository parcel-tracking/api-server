import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO";
import ILayerDTO from "../../dtos/interfaces/ILayerDTO";
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO";
import ICarrierRepository from "../../repositories/interfaces/ICarrierRepository";
import ITrackerRepository from "../../repositories/interfaces/ITrackerRepository";
import ITracker from "../entities/interfaces/ITracker";
import ITrackerUseCase from "./interfaces/ITrackerUseCase";
export default class TrackerUseCase implements ITrackerUseCase {
    private trackerRepository;
    private carrierRepository;
    constructor(trackerRepository: ITrackerRepository, carrierRepository: ICarrierRepository);
    getDelivery(carrierId: string, trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>>;
    addTracker(): Promise<ILayerDTO<boolean>>;
    getTrackers(): Promise<ILayerDTO<ITrackerDTO[]>>;
    deleteTracker(trackerId: string): Promise<ILayerDTO<boolean>>;
    clearTrackers(): Promise<ILayerDTO<boolean>>;
    updateCarrierId(tracker: ITrackerDTO, newCarrierId: string): Promise<ILayerDTO<boolean>>;
    updateLabel(tracker: ITrackerDTO, newLabel: string): Promise<ILayerDTO<boolean>>;
    updateTrackingNumber(tracker: ITrackerDTO, newTrackingNumber: string): Promise<ILayerDTO<boolean>>;
    addMemo(tracker: ITrackerDTO): Promise<ILayerDTO<boolean>>;
    updateMemo(tracker: ITrackerDTO, index: number, newMemo: string): Promise<ILayerDTO<boolean>>;
    deleteMemo(tracker: ITrackerDTO, index: number): Promise<ILayerDTO<boolean>>;
    protected generateUUID(): string;
    protected convertToEntity(trackerDTO: ITrackerDTO): ITracker;
    protected convertToDTO(tracker: ITracker): ITrackerDTO;
}
