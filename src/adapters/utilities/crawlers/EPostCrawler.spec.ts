import * as cheerio from "cheerio"
import EPostMockHTML from "./EPostMockHTML"

describe("EPostCrawler", () => {
  it("should fetch and parse tracking information", async () => {
    const $ = cheerio.load(EPostMockHTML)
    const $informationTable = $("#print").find("table")
    const $progressTable = $("#processTable")
    const $informations = $informationTable.find("td")
    console.log($informations)
  })
})
