import axios from "axios"
import * as cheerio from "cheerio"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import DeliveryStateVO from "../../../core/vos/DeliveryStateVO"
import ErrorDTO from "../../../core/dtos/ErrorDTO"
import IErrorDTO from "../../../core/dtos/interfaces/IErrorDTO"
import IDeliveryDTO from "../../../core/dtos/interfaces/IDeliveryDTO"

class EPostCrawler {
  getTrack(trackingNumber: string): Promise<IDeliveryDTO | IErrorDTO> {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1=${trackingNumber}`
        )
        .then((res) => {
          const $ = cheerio.load(res.data)
          const $informationTable = $("#print").find("table")
          const $progressTable = $("#processTable")
          const $informations = $informationTable.find("td")
          resolve(
            new DeliveryDTO(
              new DeliveryLocationVO(),
              [],
              new DeliveryStateVO(),
              new DeliveryLocationVO()
            )
          )
        })
        .catch((err) => {
          resolve(new ErrorDTO("error"))
        })
    })
  }
}

export default EPostCrawler
