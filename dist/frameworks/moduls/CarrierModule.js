"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const NCarrierUseCase_1 = require("../usecases/NCarrierUseCase");
const NCarrierController_1 = require("../controllers/NCarrierController");
const NCarrierRepository_1 = require("../repositories/NCarrierRepository");
const CarrierModel_1 = require("../models/CarrierModel");
let CarrierModule = class CarrierModule {
};
CarrierModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([CarrierModel_1.default])],
        providers: [
            {
                provide: "ICarrierRepository",
                useClass: NCarrierRepository_1.default
            },
            NCarrierUseCase_1.default
        ],
        controllers: [NCarrierController_1.default]
    })
], CarrierModule);
exports.default = CarrierModule;
//# sourceMappingURL=CarrierModule.js.map