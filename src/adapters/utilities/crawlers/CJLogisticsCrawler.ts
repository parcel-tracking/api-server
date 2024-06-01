import axios from "axios"
import * as cheerio from "cheerio"
import { Cookie } from "tough-cookie"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../../core/dtos/LayerDTO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import ICrawler from "./interfaces/ICrawler"

export default class CJLogisticsCrawler implements ICrawler {
  getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>> {
    return new Promise(async (resolve) => {
      const tracikng = await axios.get(
        "https://www.cjlogistics.com/ko/tool/parcel/tracking"
      )
      const cookie = tracikng.headers["set-cookie"]
        .map((c) => Cookie.parse(c))
        .map((c) => c.cookieString())
        .join("; ")

      const $ = cheerio.load(tracikng.data)
      const csrf = $("input[name=_csrf]").val()

      axios
        .post(
          `https://www.cjlogistics.com/ko/tool/parcel/tracking-detail?paramInvcNo=${trackingNumber}&_csrf=${csrf}`,
          {},
          {
            headers: {
              Cookie: cookie
            }
          }
        )
        .then((res) => {
          const informationTable = res.data.parcelResultMap.resultList
          const progressTable = res.data.parcelDetailResultMap.resultList

          if (informationTable.length === 0) {
            resolve(
              new LayerDTO({
                isError: true,
                message: "해당 운송장이 존재하지 않습니다."
              })
            )
          }

          const progressVOs = progressTable
            .map((row) => {
              return new DeliveryProgressVO({
                description: row.crgNm,
                location: row.regBranNm,
                time: row.dTime,
                state: this.parseStatus(row.crgSt)
              })
            })
            .reverse()

          const stateVO =
            progressVOs.length > 0 ? progressVOs[0].state : this.parseStatus()

          const fromVO = new DeliveryLocationVO({
            name: informationTable[0].sendrNm,
            time: progressTable.length > 0 ? progressTable[0].dTime : ""
          })

          const toVO = new DeliveryLocationVO({
            name: informationTable[0].rcvrNm,
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
        })
        .catch((err) => {
          resolve(
            new LayerDTO({
              isError: true,
              message: err.message
            })
          )
        })
    })
  }

  private parseStatus(value?: string) {
    if (["41", "42", "44"].includes(value)) {
      return DeliveryStateGenerator.getState("상품이동중")
    }
    if (value === "11") {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value === "82") {
      return DeliveryStateGenerator.getState("배달출발")
    }
    if (value === "91") {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품준비중")
  }
}
