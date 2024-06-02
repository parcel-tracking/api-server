import DeliveryLocationVO from "../../../core/vos/DeliveryLocationVO"
import DeliveryProgressVO from "../../../core/vos/DeliveryProgressVO"
import DeliveryStateGenerator from "../helpers/DeliveryStateGenerator"
import DeliveryDTO from "../../../core/dtos/DeliveryDTO"
import KDExpMock from "./KDExpMock"

describe("KDExpCrawler", () => {
  it("should fetch and parse tracking information", async () => {
    const parseStatus = (value?: string) => {
      if (value.includes("접수완료")) {
        return DeliveryStateGenerator.getState("상품인수")
      }
      if (value.includes("배송완료")) {
        return DeliveryStateGenerator.getState("배달완료")
      }
      return DeliveryStateGenerator.getState("상품이동중")
    }

    const parseDateTime = (value: string) => {
      return value.split(".")[0]
    }

    const res = {
      data: KDExpMock
    }

    const informationTable = res.data.info
    const progressTable = res.data.items

    const progressVOs = progressTable
      .map((row) => {
        return new DeliveryProgressVO({
          description: `연락처: ${row.tel}`,
          location: row.location,
          time: parseDateTime(row.reg_date),
          state: parseStatus(row.stat)
        })
      })
      .reverse()

    const stateVO =
      progressVOs.length > 0 ? progressVOs[0].state : parseStatus()

    const fromVO = new DeliveryLocationVO({
      name: informationTable.send_name.substring(0, 4),
      time:
        progressVOs.length > 0 ? progressVOs[progressVOs.length - 1].time : ""
    })
    const fromData = new DeliveryLocationVO({
      name: "신***",
      time: "2024-02-27 14:07:21",
      address: ""
    })
    expect(fromVO).toStrictEqual(fromData)

    const toVO = new DeliveryLocationVO({
      name: informationTable.re_name.substring(0, 4),
      time: stateVO.name === "배달완료" ? progressVOs[0].time : ""
    })
    const toData = new DeliveryLocationVO({
      name: "우***",
      time: "2024-02-29 14:41:00",
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
