import IDeliveryDTO from "../../dtos/interfaces/IDeliveryDTO"

export default interface IDeliveryUseCase {
  getDelivery(
    carrierId: string,
    trackingNumber: string,
  ): Promise<IDeliveryDTO[]>
}
