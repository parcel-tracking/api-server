export default interface ICarrierDTO {
  readonly no: number
  readonly name: string
  readonly displayName: string
  readonly isCrawlable: boolean
  readonly isPopupEnabled: boolean
  readonly popupURL: string
}
