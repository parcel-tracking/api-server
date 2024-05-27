import ITrackerDTO from "../dtos/interfaces/ITrackerDTO"
import ITrackerRepository from "../interfaces/ITrackerRepository"
import ITrackerUseCase from "./interfaces/ITrackerUseCase"

export default class TrackerUseCase implements ITrackerUseCase {
  private trackerRepository: ITrackerRepository

  constructor(trackerRepository: ITrackerRepository) {
    this.trackerRepository = trackerRepository
  }

  async getTrackers() {
    return await this.trackerRepository.getTrackers()
  }

  async addTracker(tracker: ITrackerDTO) {
    return await this.trackerRepository.addTracker(tracker)
  }

  async updateTracker(trackerId: string, tracker: ITrackerDTO) {
    return await this.trackerRepository.updateTracker(trackerId, tracker)
  }

  async deleteTracker(trackerId: string) {
    return await this.trackerRepository.deleteTracker(trackerId)
  }
}
