import ICarrier from "../../domains/entities/interfaces/ICarrier"

export default interface ITrackerDTO {
  readonly id: string
  carrier: ICarrier
  label: string
  trackingNumber: string
  memos: string[]
}
