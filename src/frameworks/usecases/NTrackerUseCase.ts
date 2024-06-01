import { Inject, Injectable } from "@nestjs/common"
import TrackerUseCase from "../../core/domains/usecases/TrackerUseCase"
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository"
import ICarrierRepository from "../../core/repositories/interfaces/ICarrierRepository"

@Injectable()
export default class NTrackerUseCase extends TrackerUseCase {
  constructor(
    @Inject("ITrackerRepository") trackerRepository: ITrackerRepository,
    @Inject("ICarrierRepository") carrierRepository: ICarrierRepository
  ) {
    super(trackerRepository, carrierRepository)
  }
}
