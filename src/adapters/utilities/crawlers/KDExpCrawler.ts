import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../../core/dtos/LayerDTO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import IServerHTTP from "../../infrastructures/interfaces/IServerHTTP"
import ICrawler from "./interfaces/ICrawler"

export default class KDExpCrawler implements ICrawler {
  constructor(private readonly serverHTTP: IServerHTTP) {}

  getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>> {
    return new Promise(async (resolve) => {
      const trackingRes = await this.serverHTTP.get(
        `https://kdexp.com/service/delivery/ajax_basic.do?barcode=${trackingNumber}`
      )

      if (trackingRes.status !== 200) {
        resolve(
          new LayerDTO({
            isError: true,
            message: "운송장 조회에 실패하였습니다."
          })
        )
        return
      }

      try {
        const resData = await trackingRes.json()
        if (resData.result !== "suc") {
          resolve(
            new LayerDTO({
              isError: true,
              message: "해당 운송장이 존재하지 않거나 조회할 수 없습니다."
            })
          )
          return
        }

        const informationTable = resData.info
        const progressTable = resData.items

        const progressVOs = progressTable
          .map((row) => {
            return new DeliveryProgressVO({
              description: `연락처: ${row.tel}`,
              location: row.location,
              time: this.parseDateTime(row.reg_date),
              state: this.parseStatus(row.stat)
            })
          })
          .reverse()

        const stateVO =
          progressVOs.length > 0 ? progressVOs[0].state : this.parseStatus()

        const fromVO = new DeliveryLocationVO({
          name: this.parseLocationName(informationTable.send_name),
          time:
            progressVOs.length > 0
              ? progressVOs[progressVOs.length - 1].time
              : ""
        })

        const toVO = new DeliveryLocationVO({
          name: this.parseLocationName(informationTable.re_name),
          time: stateVO.name === "배달완료" ? progressVOs[0].time : ""
        })

        const deliveryDTO = new DeliveryDTO({
          from: fromVO,
          to: toVO,
          progresses: progressVOs,
          state: stateVO
        })

        resolve(
          new LayerDTO({
            data: deliveryDTO
          })
        )
      } catch (error) {
        resolve(
          new LayerDTO({
            isError: true,
            message: error.message
          })
        )
      }
    })
  }

  private parseLocationName(value: string) {
    const short = value.substring(0, 4)
    return short + (short.includes("*") ? "" : "*")
  }

  private parseDateTime(value: string) {
    return value.split(".")[0]
  }

  private parseStatus(value?: string) {
    if (value.includes("접수완료")) {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value.includes("배송완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
