import ITrackerDTO from "./interfaces/ITrackerDTO";
export default class TrackerDTO implements ITrackerDTO {
    readonly id: string;
    carrierId: string;
    label: string;
    trackingNumber: string;
    memos: string[];
    constructor({ id, carrierId, label, trackingNumber, memos }: {
        id: string;
        carrierId: string;
        label: string;
        trackingNumber: string;
        memos: string[];
    });
}
