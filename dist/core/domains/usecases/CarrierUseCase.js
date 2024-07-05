"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarrierDTO_1 = require("../../dtos/CarrierDTO");
const LayerDTO_1 = require("../../dtos/LayerDTO");
const Carrier_1 = require("../entities/Carrier");
class CarrierUseCase {
    constructor(carrierRepository) {
        this.carrierRepository = carrierRepository;
    }
    async getCarriers() {
        const { isError, message, data } = await this.carrierRepository.getCarriers();
        if (isError) {
            return new LayerDTO_1.default({
                isError,
                message
            });
        }
        const carriers = data.map((carrierDTO) => {
            return this.convertToEntity(carrierDTO);
        });
        const carrierDTOs = carriers.map((carrier) => {
            return this.convertToDTO(carrier);
        });
        return new LayerDTO_1.default({
            data: carrierDTOs
        });
    }
    async getCarrier(carrierId) {
        const { isError, message, data } = await this.carrierRepository.getCarrier(carrierId);
        if (isError) {
            return new LayerDTO_1.default({
                isError,
                message
            });
        }
        const carriers = this.convertToEntity(data);
        const carrierDTOs = this.convertToDTO(carriers);
        return new LayerDTO_1.default({
            data: carrierDTOs
        });
    }
    convertToEntity(carrierDTO) {
        return new Carrier_1.default({
            id: carrierDTO.id,
            no: carrierDTO.no,
            name: carrierDTO.name,
            displayName: carrierDTO.displayName,
            isCrawlable: carrierDTO.isCrawlable,
            isPopupEnabled: carrierDTO.isPopupEnabled,
            popupURL: carrierDTO.popupURL
        });
    }
    convertToDTO(carrier) {
        return new CarrierDTO_1.default({
            id: carrier.id,
            no: carrier.no,
            name: carrier.name,
            displayName: carrier.displayName,
            isCrawlable: carrier.isCrawlable,
            isPopupEnabled: carrier.isPopupEnabled,
            popupURL: carrier.popupURL
        });
    }
}
exports.default = CarrierUseCase;
//# sourceMappingURL=CarrierUseCase.js.map