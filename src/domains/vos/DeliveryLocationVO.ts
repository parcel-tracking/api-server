import IDeliveryLocationVO from "./interfaces/IDeliveryLocationVO"

export default class DeliveryLocationVO implements IDeliveryLocationVO {
  constructor(
    readonly name: string = "",
    readonly time: string = "",
    readonly address: string = "",
  ) {}
}
