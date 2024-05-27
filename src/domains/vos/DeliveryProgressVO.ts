import IDeliveryProgressVO from "./interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "./interfaces/IDeliveryStateVO"
import DeliveryStateVO from "./DeliveryStateVO"

export default class DeliveryProgressVO implements IDeliveryProgressVO {
  constructor(
    readonly description: string = "",
    readonly location: string = "",
    readonly time: string = "",
    readonly status: IDeliveryStateVO = new DeliveryStateVO(),
  ) {}
}
