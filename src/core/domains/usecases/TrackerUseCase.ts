import ErrorDTO from "../../dtos/ErrorDTO"
import TrackerDTO from "../../dtos/TrackerDTO"
import ITrackerRepository from "../../repositories/interfaces/ITrackerRepository"
import Tracker from "../entities/Tracker"
import ITracker from "../entities/interfaces/ITracker"
import ITrackerUseCase from "./interfaces/ITrackerUseCase"

export default class TrackerUseCase implements ITrackerUseCase {
  private trackerRepository: ITrackerRepository

  constructor(trackerRepository: ITrackerRepository) {
    this.trackerRepository = trackerRepository
  }

  async getDelivery(carrierId: string, trackingNumber: string) {
    if (typeof this.trackerRepository.getDelivery === "undefined") {
      return new ErrorDTO("the wrong approach..")
    }
    return await this.trackerRepository.getDelivery(carrierId, trackingNumber)
  }

  async addTracker() {
    if (typeof this.trackerRepository.addTracker === "undefined") {
      return false
    }
    const newTracker = new Tracker()
    return await this.trackerRepository.addTracker(newTracker)
  }

  async getTrackers() {
    if (typeof this.trackerRepository.getTrackers === "undefined") {
      return new ErrorDTO("the wrong approach..")
    }
    const trackers = await this.trackerRepository.getTrackers()
    const trackerDTOs = trackers.map((entity) => {
      return new TrackerDTO(
        entity.id,
        entity.carrierId,
        entity.label,
        entity.trackingNumber,
        entity.memos
      )
    })
    return trackerDTOs
  }

  async updateCarrierId(tracker: ITracker, newCarrierId: string) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.updateCarrierId(newCarrierId)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateLabel(tracker: ITracker, newLabel: string) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.updateLabel(newLabel)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateTrackingNumber(tracker: ITracker, newTrackingNumber: string) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.updateTrackingNumber(newTrackingNumber)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async addMemo(tracker: ITracker) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.addMemo()
    return await this.trackerRepository.updateTracker(tracker)
  }

  async updateMemo(tracker: ITracker, index: number, newMemo: string) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.updateMemo(index, newMemo)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async deleteMemo(tracker: ITracker, index: number) {
    if (typeof this.trackerRepository.updateTracker === "undefined") {
      return false
    }
    tracker.deleteMemo(index)
    return await this.trackerRepository.updateTracker(tracker)
  }

  async deleteTracker(trackerId: string) {
    if (typeof this.trackerRepository.deleteTracker === "undefined") {
      return false
    }
    return await this.trackerRepository.deleteTracker(trackerId)
  }
}
