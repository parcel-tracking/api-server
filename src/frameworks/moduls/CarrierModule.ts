import { Module } from "@nestjs/common"
import NCarrierUseCase from "../usecases/NCarrierUseCase"
import { NCarriersController } from "../controllers/NCarrierController"
import { NCarrierRepository } from "../repositories/NCarrierRepository"

@Module({
  providers: [NCarrierRepository, NCarrierUseCase],
  controllers: [NCarriersController]
})
export class CarrierModule {}
