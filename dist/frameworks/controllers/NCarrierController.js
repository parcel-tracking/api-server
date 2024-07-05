"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CarrierController_1 = require("../../adapters/controllers/CarrierController");
const NCarrierUseCase_1 = require("../usecases/NCarrierUseCase");
let NCarriersController = class NCarriersController extends CarrierController_1.default {
    constructor(carriersUseCase) {
        super(carriersUseCase);
    }
    async getCarriers() {
        return super.getCarriers();
    }
    async getCarrier(carrierId) {
        return super.getCarrier(carrierId);
    }
};
__decorate([
    (0, common_1.Get)("carriers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NCarriersController.prototype, "getCarriers", null);
__decorate([
    (0, common_1.Get)("carrier/:carrierId"),
    __param(0, (0, common_1.Param)("carrierId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NCarriersController.prototype, "getCarrier", null);
NCarriersController = __decorate([
    (0, common_1.Controller)(""),
    __metadata("design:paramtypes", [NCarrierUseCase_1.default])
], NCarriersController);
exports.default = NCarriersController;
//# sourceMappingURL=NCarrierController.js.map