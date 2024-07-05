"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CJLogisticsCrawler_1 = require("./crawlers/CJLogisticsCrawler");
const DaesinCrawler_1 = require("./crawlers/DaesinCrawler");
const EPostCrawler_1 = require("./crawlers/EPostCrawler");
const HanjinCrawler_1 = require("./crawlers/HanjinCrawler");
const KDExpCrawler_1 = require("./crawlers/KDExpCrawler");
const LogenCrawler_1 = require("./crawlers/LogenCrawler");
const LotteCrawler_1 = require("./crawlers/LotteCrawler");
class CrawlerUtility {
    static getTrack(serverHTTP, carrierName, trackingNumber) {
        switch (carrierName) {
            case "epost":
                return new EPostCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "cjlogistics":
                return new CJLogisticsCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "hanjin":
                return new HanjinCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "lotte":
                return new LotteCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "kdexp":
                return new KDExpCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "daesin":
                return new DaesinCrawler_1.default(serverHTTP).getTrack(trackingNumber);
            case "logen":
                return new LogenCrawler_1.default(serverHTTP).getTrack(trackingNumber);
        }
    }
}
exports.default = CrawlerUtility;
//# sourceMappingURL=CrawlerUtility.js.map