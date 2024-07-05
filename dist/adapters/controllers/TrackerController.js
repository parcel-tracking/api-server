"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrackerController {
    constructor(trackerUseCase) {
        this.trackerUseCase = trackerUseCase;
    }
    async getDelivery(carrierId, trackingNumber) {
        return await this.trackerUseCase.getDelivery(carrierId, trackingNumber);
    }
}
exports.default = TrackerController;
//# sourceMappingURL=TrackerController.js.map