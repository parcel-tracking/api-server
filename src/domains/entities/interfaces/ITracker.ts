import ICarrier from "./ICarrier"

export default interface ITracker {
  readonly id: string
  carrier: ICarrier
  label: string
  trackingNumber: string
  memos: string[]
}
