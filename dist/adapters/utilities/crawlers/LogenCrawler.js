"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const DeliveryDTO_1 = require("../../../core/dtos/DeliveryDTO");
const DeliveryLocationVO_1 = require("../../../core/vos/DeliveryLocationVO");
const DeliveryStateGenerator_1 = require("../helpers/DeliveryStateGenerator");
const LayerDTO_1 = require("../../../core/dtos/LayerDTO");
const DeliveryProgressVO_1 = require("../../../core/vos/DeliveryProgressVO");
const StringHelper_1 = require("../helpers/StringHelper");
class LogenCrawler {
    constructor(serverHTTP) {
        this.serverHTTP = serverHTTP;
    }
    getTrack(trackingNumber) {
        return new Promise(async (resolve) => {
            const trackingRes = await this.serverHTTP.get(`https://www.ilogen.com/web/personal/trace/${trackingNumber}`);
            if (trackingRes.status !== 200) {
                resolve(new LayerDTO_1.default({
                    isError: true,
                    message: "운송장 조회에 실패하였습니다."
                }));
                return;
            }
            try {
                const resData = await trackingRes.text();
                const $ = cheerio.load(resData);
                const $content = $(".tab_contents");
                const $informationTable = $content.find("table");
                const $progressTable = $content.find("table").eq(1);
                const $informations = $informationTable.find("tbody");
                if ($progressTable.length === 0) {
                    resolve(new LayerDTO_1.default({
                        isError: true,
                        message: "해당 운송장이 존재하지 않거나 조회할 수 없습니다."
                    }));
                    return;
                }
                const progressVOs = [];
                $progressTable
                    .find("tbody")
                    .find("tr")
                    .each((_, element) => {
                    const td = $(element).find("td");
                    const description = StringHelper_1.default.trim(td.eq(3).text());
                    const location = StringHelper_1.default.trim(td.eq(1).text());
                    const time = this.parseDateTime(td.eq(0).text());
                    const state = this.parseStatus(td.eq(2).text());
                    progressVOs.push(new DeliveryProgressVO_1.default({
                        description,
                        location,
                        time,
                        state
                    }));
                });
                progressVOs.reverse();
                const stateVO = progressVOs.length > 0 && progressVOs[0].state.name === "배달완료"
                    ? progressVOs[0].state
                    : this.parseStatus();
                const fromVO = new DeliveryLocationVO_1.default({
                    name: this.parseLocationName($informations.find("tr").eq(3).find("td").eq(1).text()),
                    time: progressVOs.length > 0
                        ? progressVOs[progressVOs.length - 1].time
                        : ""
                });
                const toVO = new DeliveryLocationVO_1.default({
                    name: this.parseLocationName($informations.find("tr").eq(3).find("td").eq(3).text()),
                    time: stateVO.name === "배달완료" ? progressVOs[0].time : ""
                });
                const deliveryDTO = new DeliveryDTO_1.default({
                    from: fromVO,
                    to: toVO,
                    progresses: progressVOs,
                    state: stateVO
                });
                resolve(new LayerDTO_1.default({
                    data: deliveryDTO
                }));
            }
            catch (error) {
                resolve(new LayerDTO_1.default({
                    isError: true,
                    message: error.message
                }));
            }
        });
    }
    parseLocationName(value) {
        const short = value.substring(0, 4);
        return short + (short.includes("*") ? "" : "*");
    }
    parseDateTime(value = "") {
        return StringHelper_1.default.trim(value + ":00");
    }
    parseStatus(value) {
        if (value.includes("배송출고")) {
            return DeliveryStateGenerator_1.default.getState("배달출발");
        }
        if (value.includes("배송완료")) {
            return DeliveryStateGenerator_1.default.getState("배달완료");
        }
        return DeliveryStateGenerator_1.default.getState("상품이동중");
    }
}
exports.default = LogenCrawler;
//# sourceMappingURL=LogenCrawler.js.map