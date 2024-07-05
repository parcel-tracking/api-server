import TrackerUseCase from "../../core/domains/usecases/TrackerUseCase";
import ITrackerRepository from "../../core/repositories/interfaces/ITrackerRepository";
import ICarrierRepository from "../../core/repositories/interfaces/ICarrierRepository";
export default class NTrackerUseCase extends TrackerUseCase {
    constructor(trackerRepository: ITrackerRepository, carrierRepository: ICarrierRepository);
}
