import Carrier from "../Carrier"

export default class EMS extends Carrier {
  constructor() {
    super(11, "ems", "국체우편(EMS)", false)
  }

  getPopupURL(trackingNumber: string): string {
    return `https://service.epost.go.kr/trace.RetrieveEmsRigiTraceList.comm?displayHeader=N&POST_CODE=${trackingNumber}`
  }
}
