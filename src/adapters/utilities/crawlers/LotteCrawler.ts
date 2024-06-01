import axios from "axios"
import * as cheerio from "cheerio"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../../core/dtos/LayerDTO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import StringHelper from "../helpers/StringHelper"
import ICrawler from "./interfaces/ICrawler"

export default class LotteCrawler implements ICrawler {
  getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>> {
    return new Promise((resolve) => {
      axios
        .post(
          `https://www.lotteglogis.com/home/reservation/tracking/linkView?InvNo=${trackingNumber}`
        )
        .then((res) => {
          const $ = cheerio.load(res.data)
          const $wrap = $(".contArea")
          console.log($wrap.html())

          const $informationTable = $wrap.find("table").eq(0)
          const $progressTable = $wrap.find("table").eq(1)
          const $informations = $informationTable.find("tbody").find("td")

          if ($informations.length === 1) {
            resolve(
              new LayerDTO({
                isError: true,
                message: "해당 운송장이 존재하지 않거나 조회할 수 없습니다."
              })
            )
          }

          const progressVOs = []
          $progressTable
            .find("tbody")
            .find("tr")
            .each((_, element) => {
              const td = $(element).find("td")
              const description = StringHelper.trim(td.eq(3).text())
              const location = StringHelper.trim(td.eq(2).text())
              const time = this.parseDateTime(
                StringHelper.trim(td.eq(1).html())
              )
              const state = this.parseStatus(td.eq(0).text())
              progressVOs.push(
                new DeliveryProgressVO({
                  description,
                  location,
                  time,
                  state
                })
              )
            })

          const stateVO =
            progressVOs.length > 0
              ? progressVOs[0].state
              : this.parseStatus("상품준비중")

          const fromVO = new DeliveryLocationVO({
            name: $informations.eq(1).text(),
            time:
              progressVOs.length > 0
                ? progressVOs[progressVOs.length - 1].time
                : ""
          })

          const toVO = new DeliveryLocationVO({
            name: $informations.eq(2).text(),
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

  private parseDateTime(value: string) {
    const dateTime = value.split("&nbsp;")
    const date = dateTime[0]
    const time =
      dateTime[1] === "--:--" ? dateTime[1] + ":--" : dateTime[1] + ":00"
    return date + " " + time
  }

  private parseStatus(value?: string) {
    if (value.includes("상품접수")) {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value.includes("배송 출발")) {
      return DeliveryStateGenerator.getState("배달출발")
    }
    if (value.includes("배달 완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
