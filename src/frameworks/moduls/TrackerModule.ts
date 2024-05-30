import { Module } from "@nestjs/common"
import NCarrierUseCase from "../usecases/NTrackerUseCase"
import NCarriersController from "../controllers/NTrackerController"
import NCarrierRepository from "../repositories/NTrackerRepository"

@Module({
  providers: [NCarrierRepository, NCarrierUseCase],
  controllers: [NCarriersController]
})
export default class TrackerModule {}
