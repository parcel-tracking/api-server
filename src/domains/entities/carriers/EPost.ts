import Carrier from "../Carrier"

export default class EPost extends Carrier {
  constructor() {
    super(1, "epost", "우체국 택배", true)
  }

  getPopupURL(trackingNumber: string): string {
    return `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=${trackingNumber}`
  }
}
