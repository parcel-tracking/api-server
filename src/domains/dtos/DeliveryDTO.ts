import IDeliveryDTO from "./interfaces/IDeliveryDTO"
import IDeliveryLocationVO from "../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../vos/interfaces/IDeliveryStateVO"

export default class DeliveryDTO implements IDeliveryDTO {
  constructor(
    readonly from: IDeliveryLocationVO,
    readonly progresses: Array<IDeliveryProgressVO>,
    readonly state: IDeliveryStateVO,
    readonly to: IDeliveryLocationVO,
  ) {}
}
