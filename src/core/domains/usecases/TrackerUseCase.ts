import ITrackerRepository from "../../repositories/interfaces/ITrackerRepository"
import Tracker from "../entities/Tracker"
import ICarrier from "../entities/interfaces/ICarrier"
import ITracker from "../entities/interfaces/ITracker"
import ITrackerUseCase from "./interfaces/ITrackerUseCase"

export default class TrackerUseCase implements ITrackerUseCase {
  private trackerRepository: ITrackerRepository

  constructor(trackerRepository: ITrackerRepository) {
    this.trackerRepository = trackerRepository
  }

  async getDelivery(carrierId: string, trackingNumber: string) {
    return await this.trackerRepository.getDelivery(carrierId, trackingNumber)
  }

  async addTracker() {
    const newTracker = new Tracker()
    return await this.trackerRepository.addTracker(newTracker)
  }

  async getTrackers() {
    return await this.trackerRepository.getTrackers()
  }

  async updateCarrier(tracker: ITracker, newCarrier: ICarrier) {
    tracker.updateCarrier(newCarrier)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateLabel(tracker: ITracker, newLabel: string) {
    tracker.updateLabel(newLabel)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateTrackingNumber(tracker: ITracker, newTrackingNumber: string) {
    tracker.updateTrackingNumber(newTrackingNumber)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async addMemo(tracker: ITracker) {
    tracker.addMemo()
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateMemo(tracker: ITracker, index: number, newMemo: string) {
    tracker.updateMemo(index, newMemo)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async deleteMemo(tracker: ITracker, index: number) {
    tracker.deleteMemo(index)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async deleteTracker(trackerId: string) {
    return await this.trackerRepository.deleteTracker(trackerId)
  }
}
