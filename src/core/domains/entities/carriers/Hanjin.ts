import Carrier from "../Carrier"

export default class Hanjin extends Carrier {
  constructor() {
    super(3, "hanjin", "한진 택배", true)
  }

  getPopupURL(trackingNumber: string): string {
    return `http://www.hanjinexpress.hanjin.net/customer/hddcw18.tracking?w_num=${trackingNumber}`
  }
}
