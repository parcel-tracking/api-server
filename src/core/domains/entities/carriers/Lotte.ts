import Carrier from "../Carrier"

export default class Lotte extends Carrier {
  constructor() {
    super(4, "lotte", "롯데 택배", true)
  }

  getPopupURL(trackingNumber: string): string {
    return `https://www.lotteglogis.com/open/tracking?invno=${trackingNumber}`
  }
}
