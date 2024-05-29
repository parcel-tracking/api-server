import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import IErrorDTO from "../../../core/dtos/interfaces/IErrorDTO"

export default interface ICrawlerUtility {
  getTrack(trackingNumber: string): Promise<IDeliveryDTO | IErrorDTO>
}
