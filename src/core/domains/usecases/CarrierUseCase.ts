import CarrierDTO from "../../dtos/CarrierDTO"
import ICarrierRepository from "../../repositories/interfaces/ICarrierRepository"
import ICarrierUseCase from "./interfaces/ICarrierUseCase"

export default class CarrierUseCase implements ICarrierUseCase {
  private carrierRepository: ICarrierRepository

  constructor(carrierRepository: ICarrierRepository) {
    this.carrierRepository = carrierRepository
  }

  async getCarriers() {
    const carriers = await this.carrierRepository.getCarriers()
    const carrierDTOs = carriers.map((entitiy) => {
      return new CarrierDTO(
        entitiy.no,
        entitiy.name,
        entitiy.displayName,
        entitiy.isCrawlable,
        entitiy.isPopupEnabled,
        entitiy.popupURL
      )
    })
    return carrierDTOs
  }
}
