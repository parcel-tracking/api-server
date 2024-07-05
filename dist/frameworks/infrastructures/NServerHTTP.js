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
const ServerHTTP_1 = require("../../adapters/infrastructures/ServerHTTP");
let NServerHTTP = class NServerHTTP extends ServerHTTP_1.default {
    constructor(httpServer) {
        super(httpServer);
    }
    async get(url, options) {
        return super.get(url, options);
    }
    async post(url, body, options) {
        return super.post(url, body, options);
    }
    async put(url, body, options) {
        return super.put(url, body, options);
    }
    async delete(url, options) {
        return super.delete(url, options);
    }
};
NServerHTTP = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("IHttpServer")),
    __metadata("design:paramtypes", [Function])
], NServerHTTP);
exports.default = NServerHTTP;
//# sourceMappingURL=NServerHTTP.js.map