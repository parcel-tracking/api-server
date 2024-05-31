import IDeliveryDTO from "../../../dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../../dtos/interfaces/IErrorDTO"
import ITrackerDTO from "../../../dtos/interfaces/ITrackerDTO"
import ITracker from "../../entities/interfaces/ITracker"

export default interface ITrackerUseCase {
  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO>
  addTracker(): Promise<boolean>
  getTrackers(): Promise<ITrackerDTO[] | IErrorDTO>
  updateCarrierId(tracker: ITracker, newCarrierId: string): Promise<boolean>
  updateLabel(tracker: ITracker, newLabel: string): Promise<boolean>
  updateTrackingNumber(
    tracker: ITracker,
    newTrackingNumber: string
  ): Promise<boolean>
  addMemo(tracker: ITracker): Promise<boolean>
  updateMemo(
    tracker: ITracker,
    index: number,
    newMemo: string
  ): Promise<boolean>
  deleteMemo(tracker: ITracker, index: number): Promise<boolean>
  deleteTracker(trackerId: string): Promise<boolean>
}
