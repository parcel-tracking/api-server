import ITracker from "../../domains/entities/interfaces/ITracker"
import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../dtos/interfaces/IErrorDTO"
import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerRepository {
  getDelivery?(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO>
  getTrackers?(): Promise<ITrackerDTO[]>
  addTracker?(tracker: ITracker): Promise<boolean>
  updateTracker?(tracker: ITracker): Promise<boolean>
  deleteTracker?(trackerId: string): Promise<boolean>
}
