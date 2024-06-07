import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import NTrackerController from "../controllers/NTrackerController"
import NTrackerUseCase from "../usecases/NTrackerUseCase"
import NTrackerRepository from "../repositories/NTrackerRepository"
import NCarrierRepository from "../repositories/NCarrierRepository"
import CarrierModel from "../models/CarrierModel"
import NServerHTTP from "../infrastructures/NServerHTTP"

@Module({
  imports: [SequelizeModule.forFeature([CarrierModel])],
  providers: [
    {
      provide: "IServerHTTP",
      useClass: NServerHTTP
    },
    {
      provide: "ITrackerRepository",
      useClass: NTrackerRepository
    },
    {
      provide: "ICarrierRepository",
      useClass: NCarrierRepository
    },
    NTrackerUseCase
  ],
  controllers: [NTrackerController]
})
export default class TrackerModule {}
