import ITrackerDTO from "../../dtos/interfaces/ITrackerDTO"

export default interface ITrackerUseCase {
  getTrackers(): Promise<ITrackerDTO[]>
  addTracker(tracker: ITrackerDTO): Promise<boolean>
  updateTracker(trackerId: string, tracker: ITrackerDTO): Promise<boolean>
  deleteTracker(trackerId: string): Promise<boolean>
}
