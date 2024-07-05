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
const node_fetch_1 = require("node-fetch");
const CarrierModel_1 = require("../models/CarrierModel");
const NServerHTTP_1 = require("../infrastructures/NServerHTTP");
const NTrackerRepository_1 = require("../repositories/NTrackerRepository");
const NCarrierRepository_1 = require("../repositories/NCarrierRepository");
const NTrackerUseCase_1 = require("../usecases/NTrackerUseCase");
const NTrackerController_1 = require("../controllers/NTrackerController");
let TrackerModule = class TrackerModule {
};
TrackerModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([CarrierModel_1.default])],
        providers: [
            {
                provide: "IHttpServer",
                useValue: node_fetch_1.default
            },
            {
                provide: "IServerHTTP",
                useClass: NServerHTTP_1.default
            },
            {
                provide: "ITrackerRepository",
                useClass: NTrackerRepository_1.default
            },
            {
                provide: "ICarrierRepository",
                useClass: NCarrierRepository_1.default
            },
            NTrackerUseCase_1.default
        ],
        controllers: [NTrackerController_1.default]
    })
], TrackerModule);
exports.default = TrackerModule;
//# sourceMappingURL=TrackerModule.js.map