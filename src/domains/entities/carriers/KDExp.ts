import Carrier from "../Carrier"

export default class KDExp extends Carrier {
  constructor() {
    super(8, "kdexp", "경동 택배", true)
  }

  getPopupURL(trackingNumber: string): string {
    return ``
  }
}
