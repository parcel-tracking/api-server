import IDeliveryDTO from "../dtos/interfaces/IDeliveryDTO"

export default interface IDeliveryRepository {
  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO[]>
}
