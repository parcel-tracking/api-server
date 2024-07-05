"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrawlerUtility_1 = require("../utilities/CrawlerUtility");
class TrackerRepository {
    constructor(serverHTTP) {
        this.serverHTTP = serverHTTP;
    }
    getDelivery(carrier, trackingNumber) {
        const { name } = carrier;
        return CrawlerUtility_1.default.getTrack(this.serverHTTP, name, trackingNumber);
    }
}
exports.default = TrackerRepository;
//# sourceMappingURL=TrackerRepository.js.map