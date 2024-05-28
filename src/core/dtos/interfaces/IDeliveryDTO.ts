import IDeliveryLocationVO from "../../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../../vos/interfaces/IDeliveryStateVO"

export default interface IDeliveryDTO {
  from: IDeliveryLocationVO
  progresses: Array<IDeliveryProgressVO>
  state: IDeliveryStateVO
  to: IDeliveryLocationVO
}
