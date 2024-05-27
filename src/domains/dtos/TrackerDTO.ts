import ICarrier from "../entities/interfaces/ICarrier"
import ITrackerDTO from "./interfaces/ITrackerDTO"

export default class TrackerDTO implements ITrackerDTO {
  constructor(
    public readonly id: string,
    public carrier: ICarrier,
    public label: string,
    public trackingNumber: string,
    public memos: string[],
  ) {}
}
