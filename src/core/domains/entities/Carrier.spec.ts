import Carrier from "./Carrier"
import ICarrier from "./interfaces/ICarrier"

describe("Carrier", () => {
  let carrier: ICarrier

  beforeEach(() => {
    carrier = Object.freeze(
      new Carrier(
        1,
        "carrier123",
        "Carrier Name",
        true,
        true,
        "http://example.com"
      )
    )
  })

  it("should create an instance with the given properties", () => {
    expect(carrier.no).toBe(1)
    expect(carrier.id).toBe("carrier123")
    expect(carrier.name).toBe("Carrier Name")
    expect(carrier.isCrawlable).toBe(true)
    expect(carrier.isPopupEnabled).toBe(true)
    expect(carrier.popupURL).toBe("http://example.com")
  })

  it("should have readonly properties", () => {
    expect(() => {
      ;(carrier as any).no = 1
    }).toThrow()

    expect(() => {
      ;(carrier as any).id = "new-id"
    }).toThrow()

    expect(() => {
      ;(carrier as any).name = "new-name"
    }).toThrow()

    expect(() => {
      ;(carrier as any).isCrawlable = true
    }).toThrow()

    expect(() => {
      ;(carrier as any).isPopupEnabled = true
    }).toThrow()

    expect(() => {
      ;(carrier as any).popupURL = "http://example.com"
    }).toThrow()
  })
})
