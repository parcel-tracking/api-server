import ICarrier from "../entities/interfaces/ICarrier"
import ITrackerDTO from "./interfaces/ITrackerDTO"

export default class TrackerDTO implements ITrackerDTO {
  constructor(
    public readonly id: string,
    public readonly carrier: ICarrier,
    public readonly label: string,
    public readonly trackingNumber: string,
    public readonly memos: string[]
  ) {}
}
