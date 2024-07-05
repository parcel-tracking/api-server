import CarriersController from "../../adapters/controllers/CarrierController";
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO";
import NCarrierUseCase from "../usecases/NCarrierUseCase";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
export default class NCarriersController extends CarriersController {
    constructor(carriersUseCase: NCarrierUseCase);
    getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>>;
    getCarrier(carrierId: string): Promise<ILayerDTO<ICarrierDTO>>;
}
