import ICarrierDTO from "../../dtos/interfaces/ICarrierDTO";
import ILayerDTO from "../../dtos/interfaces/ILayerDTO";
import ICarrierRepository from "../../repositories/interfaces/ICarrierRepository";
import ICarrier from "../entities/interfaces/ICarrier";
import ICarrierUseCase from "./interfaces/ICarrierUseCase";
export default class CarrierUseCase implements ICarrierUseCase {
    private carrierRepository;
    constructor(carrierRepository: ICarrierRepository);
    getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>>;
    getCarrier(carrierId: string): Promise<ILayerDTO<ICarrierDTO>>;
    protected convertToEntity(carrierDTO: ICarrierDTO): ICarrier;
    protected convertToDTO(carrier: ICarrier): ICarrierDTO;
}
