import ITracker from "../../domains/entities/interfaces/ITracker"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ILayerDTO from "../../dtos/interfaces/ILayerDTO"

export default interface ITrackerRepository {
  getDelivery?(
    carrierId: string,
    trackingNumber: string
  ): Promise<ILayerDTO<IDeliveryDTO>>
  getTrackers?(): Promise<ILayerDTO<ITracker[]>>
  addTracker?(tracker: ITracker): Promise<ILayerDTO<boolean>>
  updateTracker?(tracker: ITracker): Promise<ILayerDTO<boolean>>
  deleteTracker?(trackerId: string): Promise<ILayerDTO<boolean>>
}
