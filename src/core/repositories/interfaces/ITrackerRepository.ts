import ITracker from "../../domains/entities/interfaces/ITracker"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerRepository {
  getDelivery?(carrierId: string, trackingNumber: string): Promise<IDeliveryDTO>
  getTrackers?(): Promise<ITrackerDTO[]>
  addTracker?(tracker: ITrackerDTO): Promise<boolean>
  updateTracker?(tracker: ITracker): Promise<boolean>
  deleteTracker?(trackerId: string): Promise<boolean>
}
