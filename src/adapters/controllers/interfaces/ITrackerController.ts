import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../../core/dtos/interfaces/IErrorDTO"

export default interface ITrackerController {
  getDelivery(
    carrierId: string,
    trackingNumber: string
  ): Promise<IDeliveryDTO | IErrorDTO>
}
