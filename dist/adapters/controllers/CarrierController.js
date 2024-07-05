"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarriersController {
    constructor(carriersUseCase) {
        this.carriersUseCase = carriersUseCase;
    }
    async getCarriers() {
        return await this.carriersUseCase.getCarriers();
    }
    async getCarrier(carrierId) {
        return await this.carriersUseCase.getCarrier(carrierId);
    }
}
exports.default = CarriersController;
//# sourceMappingURL=CarrierController.js.map