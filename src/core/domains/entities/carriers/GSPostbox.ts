import Carrier from "../Carrier"

export default class GSPostbox extends Carrier {
  constructor() {
    super(6, "gspostbox", "GS 편의점 택배", false)
  }
}
