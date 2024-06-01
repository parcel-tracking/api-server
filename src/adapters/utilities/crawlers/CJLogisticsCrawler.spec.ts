import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import CJLogisticsMock from "./CJLogisticsMock"

describe("CJLogisticsCrawler", () => {
  it("should fetch and parse tracking information", async () => {
    const parseStatus = (value?: string) => {
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

    const res = {
      data: CJLogisticsMock
    }

    const informationTable = res.data.parcelResultMap.resultList
    const progressTable = res.data.parcelDetailResultMap.resultList

    const progressVOs = progressTable
      .map((row) => {
        return new DeliveryProgressVO({
          description: row.crgNm,
          location: row.regBranNm,
          time: row.dTime,
          state: parseStatus(row.crgSt)
        })
      })
      .reverse()

    const stateVO =
      progressVOs.length > 0 ? progressVOs[0].state : parseStatus()

    const fromVO = new DeliveryLocationVO({
      name: informationTable[0].sendrNm,
      time: progressTable.length > 0 ? progressTable[0].dTime : ""
    })
    const fromData = new DeliveryLocationVO({
      name: "코**",
      time: "2024-04-08 18:15:11",
      address: ""
    })
    expect(fromVO).toStrictEqual(fromData)

    const toVO = new DeliveryLocationVO({
      name: informationTable[0].rcvrNm,
      time: stateVO.name === "배달완료" ? progressVOs[0].time : ""
    })
    const toData = new DeliveryLocationVO({
      name: "이**",
      time: "2024-04-11 17:17:04",
      address: ""
    })
    expect(toVO).toStrictEqual(toData)

    const deliveryDTO = new DeliveryDTO({
      from: fromVO,
      to: toVO,
      progresses: progressVOs,
      state: stateVO
    })

    // console.log(deliveryDTO)
  })
})
