import IDeliveryRepository from "../interfaces/IDeliveryRepository"
import IDeliveryUseCase from "./interfaces/IDeliveryUseCase"

export default class DeliveryUseCase implements IDeliveryUseCase {
  private deliveryRepository: IDeliveryRepository

  constructor(carrierRepository: IDeliveryRepository) {
    this.deliveryRepository = carrierRepository
  }

  async getDelivery(carrierId: string, trackingNumber: string) {
    return await this.deliveryRepository.getDelivery(carrierId, trackingNumber)
  }
}
