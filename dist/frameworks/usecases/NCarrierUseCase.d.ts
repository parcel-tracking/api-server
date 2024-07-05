import CarrierUseCase from "../../core/domains/usecases/CarrierUseCase";
import NCarrierRepository from "../repositories/NCarrierRepository";
export default class NCarrierUseCase extends CarrierUseCase {
    constructor(carrierRepository: NCarrierRepository);
}
