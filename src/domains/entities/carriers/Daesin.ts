import Carrier from "../Carrier"

export default class Daesin extends Carrier {
  constructor() {
    super(9, "daesin", "대신 택배", true)
  }

  getPopupURL(trackingNumber: string): string {
    return ``
  }
}
