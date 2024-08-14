"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeliveryDTO_1 = require("../../../core/dtos/DeliveryDTO");
const DeliveryLocationVO_1 = require("../../../core/vos/DeliveryLocationVO");
const DeliveryStateGenerator_1 = require("../helpers/DeliveryStateGenerator");
const LayerDTO_1 = require("../../../core/dtos/LayerDTO");
const DeliveryProgressVO_1 = require("../../../core/vos/DeliveryProgressVO");
class KDExpCrawler {
    constructor(serverHTTP) {
        this.serverHTTP = serverHTTP;
    }
    getTrack(trackingNumber) {
        return new Promise(async (resolve) => {
            const trackingRes = await this.serverHTTP.get(`https://kdexp.com/service/delivery/ajax_basic.do?barcode=${trackingNumber}`);
            if (trackingRes.status !== 200) {
                resolve(new LayerDTO_1.default({
                    isError: true,
                    message: "운송장 조회에 실패하였습니다."
                }));
                return;
            }
            try {
                const resData = await trackingRes.json();
                if (resData.result !== "suc") {
                    resolve(new LayerDTO_1.default({
                        isError: true,
                        message: "해당 운송장이 존재하지 않거나 조회할 수 없습니다."
                    }));
                    return;
                }
                const informationTable = resData.info;
                const progressTable = resData.items;
                const progressVOs = progressTable
                    .map((row) => {
                    return new DeliveryProgressVO_1.default({
                        description: `연락처: ${row.tel}`,
                        location: row.location,
                        time: this.parseDateTime(row.reg_date),
                        state: this.parseStatus(row.stat)
                    });
                })
                    .reverse();
                const stateVO = progressVOs.length > 0 ? progressVOs[0].state : this.parseStatus();
                const fromVO = new DeliveryLocationVO_1.default({
                    name: this.parseLocationName(informationTable.send_name),
                    time: progressVOs.length > 0
                        ? progressVOs[progressVOs.length - 1].time
                        : ""
                });
                const toVO = new DeliveryLocationVO_1.default({
                    name: this.parseLocationName(informationTable.re_name),
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
    parseDateTime(value) {
        return value.split(".")[0];
    }
    parseStatus(value) {
        if (typeof value !== "string") {
            return DeliveryStateGenerator_1.default.getState("상품이동중");
        }
        if (value.includes("접수완료")) {
            return DeliveryStateGenerator_1.default.getState("상품인수");
        }
        if (value.includes("배송완료")) {
            return DeliveryStateGenerator_1.default.getState("배달완료");
        }
        return DeliveryStateGenerator_1.default.getState("상품이동중");
    }
}
exports.default = KDExpCrawler;
//# sourceMappingURL=KDExpCrawler.js.map