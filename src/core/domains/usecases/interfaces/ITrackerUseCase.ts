import IDeliveryDTO from "../../../dtos/interfaces/IDeliveryDTO"
import ITrackerDTO from "../../../dtos/interfaces/ITrackerDTO"
import ICarrier from "../../entities/interfaces/ICarrier"
import ITracker from "../../entities/interfaces/ITracker"

export default interface ITrackerUseCase {
  getDelivery(carrierId: string, trackingNumber: string): Promise<IDeliveryDTO>
  addTracker(): Promise<boolean>
  getTrackers(): Promise<ITrackerDTO[]>
  updateCarrier(tracker: ITracker, newCarrier: ICarrier): Promise<boolean>
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
