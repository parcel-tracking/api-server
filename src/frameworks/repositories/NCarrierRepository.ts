import { Injectable } from "@nestjs/common"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import CarrierRepository from "../../adapters/repositories/CarrierRepository"
import CarrierModel from "../models/CarrierModel"
import { InjectModel } from "@nestjs/sequelize"
import CarrierDTO from "../../core/dtos/CarrierDTO"

@Injectable()
export default class NCarrierRepository extends CarrierRepository {
  constructor(
    @InjectModel(CarrierModel)
    private carrierModel: typeof CarrierModel
  ) {
    super()
  }

  async getCarriers(): Promise<ICarrierDTO[]> {
    const carrierModels = await this.carrierModel.findAll()
    const carrierDTOs = carrierModels.map((model) => {
      return new CarrierDTO(
        model.no,
        model.name,
        model.displayName,
        model.isCrawlable,
        model.isPopupEnabled,
        model.popupURL
      )
    })
    return carrierDTOs
  }
}
