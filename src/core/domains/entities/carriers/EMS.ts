import Carrier from "../Carrier"

export default class EMS extends Carrier {
  constructor() {
    super(11, "ems", "국체우편(EMS)", false)
  }
}
