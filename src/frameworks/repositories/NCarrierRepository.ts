import { Injectable } from "@nestjs/common"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import CarrierModel from "../models/CarrierModel"
import { InjectModel } from "@nestjs/sequelize"
import Carrier from "../../core/domains/entities/Carrier"
import ICarrier from "../../core/domains/entities/interfaces/ICarrier"
import ILayerDTO from "../../core/dtos/interfaces/ILayerDTO"
import LayerDTO from "../../core/dtos/LayerDTO"

@Injectable()
export default class NCarrierRepository extends CarrierRepository {
  constructor(
    @InjectModel(CarrierModel)
    private carrierModel: typeof CarrierModel
  ) {
    super()
  }

  async getCarriers(): Promise<ILayerDTO<ICarrier[]>> {
    const carrierModels = await this.carrierModel.findAll()
    const carriers = carrierModels.map((model) => {
      return new Carrier({
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

  async getCarrier(carrierId: string): Promise<ILayerDTO<ICarrier>> {
    const carrierModel = await this.carrierModel.findOne({
      where: { uid: carrierId }
    })
    const carrier = new Carrier({
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
