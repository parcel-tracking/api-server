import ITrackerDTO from "../dtos/interfaces/ITrackerDTO"
import ITracker from "../entities/interfaces/ITracker"

export default interface ITrackerRepository {
  getTrackers(): Promise<ITrackerDTO[]>
  addTracker(tracker: ITrackerDTO): Promise<boolean>
  updateTracker(tracker: ITracker): Promise<boolean>
  deleteTracker(trackerId: string): Promise<boolean>
}
