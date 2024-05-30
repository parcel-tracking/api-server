import { randomUUID } from "crypto"
import ITracker from "./interfaces/ITracker"

export default class Tracker implements ITracker {
  readonly id: string

  constructor(
    public carrierId: string = "",
    public label: string = "",
    public trackingNumber: string = "",
    public memos: string[] = []
  ) {
    this.id = randomUUID()
  }

  updateCarrierId(newCarrierId: string) {
    this.carrierId = newCarrierId
  }

  updateLabel(newLabel: string) {
    this.label = newLabel
  }

  updateTrackingNumber(newTrackingNumber: string) {
    this.trackingNumber = newTrackingNumber
  }

  addMemo() {
    this.memos.push("")
  }

  updateMemo(index: number, newMemo: string) {
    if (typeof this.memos[index] !== "string") return
    this.memos[index] = newMemo
  }

  deleteMemo(index: number) {
    this.memos = this.memos.filter((_, i) => i !== index)
  }
}
