import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import CarrierModel from "../models/CarrierModel"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../core/dtos/LayerDTO"
import CarrierDTO from "../../core/dtos/CarrierDTO"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"

@Injectable()
export default class NCarrierRepository extends CarrierRepository {
  constructor(
    @InjectModel(CarrierModel)
    private carrierModel: typeof CarrierModel
  ) {
    super()
  }

  async getCarriers(): Promise<ILayerDTO<ICarrierDTO[]>> {
    const carrierModels = await this.carrierModel.findAll()
    const carriers = carrierModels.map((model) => {
      return new CarrierDTO({
        id: model.uid,
        no: model.no,
        name: model.name,
        displayName: model.displayName,
        isCrawlable: model.isCrawlable,
        isPopupEnabled: model.isPopupEnabled,
        popupURL: model.popupURL
      })
    })

    return new LayerDTO({
      data: carriers
    })
  }

  async getCarrier(carrierId: string): Promise<ILayerDTO<ICarrierDTO>> {
    const carrierModel = await this.carrierModel.findOne({
      where: { uid: carrierId }
    })
    const carrier = new CarrierDTO({
      id: carrierModel.uid,
      no: carrierModel.no,
      name: carrierModel.name,
      displayName: carrierModel.displayName,
      isCrawlable: carrierModel.isCrawlable,
      isPopupEnabled: carrierModel.isPopupEnabled,
      popupURL: carrierModel.popupURL
    })

    return new LayerDTO({
      data: carrier
    })
  }
}
