import IDeliveryLocation from "../../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgress from "../../vos/interfaces/IDeliveryProgressVO"
import IDeliveryState from "../../vos/interfaces/IDeliveryStateVO"

export default interface IDeliveryDTO {
  from: IDeliveryLocation
  progresses: Array<IDeliveryProgress>
  state: IDeliveryState
  to: IDeliveryLocation
}
