import { Injectable } from "@nestjs/common"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import CarrierModel from "../models/CarrierModel"
import { InjectModel } from "@nestjs/sequelize"
import CarrierDTO from "../../core/dtos/CarrierDTO"
import Carrier from "../../core/domains/entities/Carrier"
import ICarrier from "../../core/domains/entities/interfaces/ICarrier"

@Injectable()
export default class NCarrierRepository extends CarrierRepository {
  constructor(
    @InjectModel(CarrierModel)
    private carrierModel: typeof CarrierModel
  ) {
    super()
  }

  async getCarriers(): Promise<ICarrier[]> {
    const carrierModels = await this.carrierModel.findAll()
    const carriers = carrierModels.map((model) => {
      return new Carrier(
        model.no,
        model.name,
        model.displayName,
        model.isCrawlable,
        model.isPopupEnabled,
        model.popupURL
      )
    })
    return carriers
  }
}
