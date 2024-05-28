import Carrier from "../Carrier"

export default class CJLogistics extends Carrier {
  constructor() {
    super(2, "cjlogistics", "CJ 대한통운", true)
  }

  getPopupURL(trackingNumber: string): string {
    return `http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=${trackingNumber}`
  }
}
