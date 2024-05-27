import Carrier from "../Carrier"

export default class Ilyanglogis extends Carrier {
  constructor() {
    super(10, "ilyanglogis", "일양로지스", false)
  }

  getPopupURL(trackingNumber: string): string {
    return `http://www.ilyanglogis.com/functionality/card_form_waybill.asp?hawb_no=${trackingNumber}`
  }
}
