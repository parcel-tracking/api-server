import ICarrierUseCase from "../../core/domains/usecases/interfaces/ICarrierUseCase";
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO";
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO";
import ICarrierController from "./interfaces/ICarrierController";
export default class CarriersController implements ICarrierController {
    private readonly carriersUseCase;
    constructor(carriersUseCase: ICarrierUseCase);
    getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>>;
    getCarrier(carrierId: string): Promise<ILayerDTO<ICarrierDTO>>;
}
