import ITrackerDTO from "./interfaces/ITrackerDTO"

export default class TrackerDTO implements ITrackerDTO {
  constructor(
    public readonly id: string,
    public readonly carrierId: string,
    public readonly label: string,
    public readonly trackingNumber: string,
    public readonly memos: string[]
  ) {}
}
