import ICarrier from "./ICarrier"

export default interface ITracker {
  readonly id: string
  carrier: ICarrier
  label: string
  trackingNumber: string
  memos: string[]
  updateLabel(newLabel: string): void
  updateTrackingNumber(newTrackingNumber: string): void
  updateCarrier(newCarrier: ICarrier): void
  addMemo(): void
  updateMemo(index: number, newMemo: string): void
  deleteMemo(index: number): void
}
