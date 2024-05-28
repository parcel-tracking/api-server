import ICarrierRepository from "../../repositories/interfaces/ICarrierRepository"
import ICarrierUseCase from "./interfaces/ICarrierUseCase"

export default class CarrierUseCase implements ICarrierUseCase {
  private carrierRepository: ICarrierRepository

  constructor(carrierRepository: ICarrierRepository) {
    this.carrierRepository = carrierRepository
  }

  async getCarriers() {
    return await this.carrierRepository.getCarriers()
  }
}
