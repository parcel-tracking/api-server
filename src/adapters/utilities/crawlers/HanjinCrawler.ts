import * as cheerio from "cheerio"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import ILayerDTO from "../../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../../core/dtos/LayerDTO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import IServerHTTP from "../../infrastructures/interfaces/IServerHTTP"
import StringHelper from "../helpers/StringHelper"
import ICrawler from "./interfaces/ICrawler"

export default class HanjinCrawler implements ICrawler {
  constructor(private readonly serverHTTP: IServerHTTP) {}

  getTrack(trackingNumber: string): Promise<ILayerDTO<IDeliveryDTO>> {
    return new Promise(async (resolve) => {
      const trackingRes = await this.serverHTTP.post(
        `https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?wblnum=${trackingNumber}&mCode=MN038&schLang=KR`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
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

      const resData = await trackingRes.text()
      const $ = cheerio.load(resData)
      const $wrap = $("#delivery-wr")
      if ($wrap.length === 0) {
        resolve(
          new LayerDTO({
            isError: true,
            message: "해당 운송장이 존재하지 않거나 조회할 수 없습니다."
          })
        )
        return
      }

      const $informationTable = $wrap.find(".delivery-tbl").find("tbody")
      const $progressTable = $wrap.find(".waybill-tbl").find("table")
      const $informations = $informationTable.find("td")

      const progressVOs = []
      $progressTable
        .find("tbody")
        .find("tr")
        .each((_, element) => {
          const td = $(element).find("td")
          const description = StringHelper.trim(td.eq(3).text())
          const location = StringHelper.trim(td.eq(2).text())
          const time = this.parseDateTime(td.eq(0).text(), td.eq(1).text())
          const state = this.parseStatus(td.eq(3).text())
          progressVOs.push(
            new DeliveryProgressVO({
              description,
              location,
              time,
              state
            })
          )
        })
      progressVOs.reverse()

      const stateVO =
        progressVOs.length > 0
          ? progressVOs[0].state
          : this.parseStatus("상품준비중")

      const fromVO = new DeliveryLocationVO({
        name: this.parseLocationName($informations.eq(1).text()),
        time:
          progressVOs.length > 0 ? progressVOs[progressVOs.length - 1].time : ""
      })

      const toVO = new DeliveryLocationVO({
        name: this.parseLocationName($informations.eq(2).text()),
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
  }

  private parseLocationName(value: string) {
    const short = value.substring(0, 4)
    return short + (short.includes("*") ? "" : "*")
  }

  private parseDateTime(date: string, time: string) {
    return date + " " + time + ":00"
  }

  private parseStatus(value?: string) {
    if (value.includes("집하")) {
      return DeliveryStateGenerator.getState("상품인수")
    }
    if (value.includes("배송출발")) {
      return DeliveryStateGenerator.getState("배달출발")
    }
    if (value.includes("배송완료")) {
      return DeliveryStateGenerator.getState("배달완료")
    }
    return DeliveryStateGenerator.getState("상품이동중")
  }
}
