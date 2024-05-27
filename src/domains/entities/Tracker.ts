import ICarrier from "./interfaces/ICarrier"
import ITracker from "./interfaces/ITracker"

export default class Tracker implements ITracker {
  constructor(
    public readonly id: string,
    public carrier: ICarrier,
    public label: string,
    public trackingNumber: string,
    public memos: string[],
  ) {}
}
