import Carrier from "../Carrier"

export default class CUPost extends Carrier {
  constructor() {
    super(7, "cupost", "CU 편의점 택배", false)
  }

  getPopupURL(trackingNumber: string): string {
    return `https://www.cupost.co.kr/postbox/delivery/localResult.cupost?invoice_no=${trackingNumber}`
  }
}
