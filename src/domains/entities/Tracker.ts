import { randomUUID } from "crypto"
import ICarrier from "./interfaces/ICarrier"
import ITracker from "./interfaces/ITracker"
import EPostFactory from "../factories/carriers/EPostFactory"

export default class Tracker implements ITracker {
  readonly id: string

  constructor(
    public carrier: ICarrier = new EPostFactory().newCarrier(),
    public label: string = "",
    public trackingNumber: string = "",
    public memos: string[] = []
  ) {
    this.id = randomUUID()
  }

  updateCarrier(newCarrier: ICarrier) {
    this.carrier = newCarrier
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
