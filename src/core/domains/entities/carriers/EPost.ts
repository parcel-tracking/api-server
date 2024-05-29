import Carrier from "../Carrier"

export default class EPost extends Carrier {
  constructor() {
    super(1, "epost", "우체국 택배", true)
  }
}
