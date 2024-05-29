import { Injectable } from "@nestjs/common"
import TrackerUseCase from "../../core/domains/usecases/TrackerUseCase"
import NTrackerRepository from "../repositories/NTrackerRepository"

@Injectable()
export default class NTrackerUseCase extends TrackerUseCase {
  constructor(trackerRepository: NTrackerRepository) {
    super(trackerRepository)
  }
}
