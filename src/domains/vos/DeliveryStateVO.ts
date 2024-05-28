import IDeliveryStateVO from "./interfaces/IDeliveryStateVO"

export default class DeliveryStateVO implements IDeliveryStateVO {
  constructor(
    readonly id: string = "",
    readonly name: string = ""
  ) {}
}
