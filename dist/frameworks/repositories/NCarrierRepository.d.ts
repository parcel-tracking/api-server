import CarrierRepository from "../../adapters/repositories/CarrierRepository";
import CarrierModel from "../models/CarrierModel";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO";
export default class NCarrierRepository extends CarrierRepository {
    private carrierModel;
    constructor(carrierModel: typeof CarrierModel);
    getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>>;
    getCarrier(carrierId: string): Promise<ILayerDTO<ICarrierDTO>>;
}
