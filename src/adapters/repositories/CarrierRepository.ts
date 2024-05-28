import ICarrierRepository from "../../core/repositories/interfaces/ICarrierRepository"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import ICarrier from "../../core/domains/entities/interfaces/ICarrier"
import EPostFactory from "../../core/domains/factories/carriers/EPostFactory"
import CJLogisticsFactory from "../../core/domains/factories/carriers/CJLogisticsFactory"
import HanjinFactory from "../../core/domains/factories/carriers/HanjinFactory"
import LotteFactory from "../../core/domains/factories/carriers/LotteFactory"
import GSPostboxFactory from "../../core/domains/factories/carriers/GSPostboxFactory"
import CUPostFactory from "../../core/domains/factories/carriers/CUPostFactory"
import KDExpFactory from "../../core/domains/factories/carriers/KDExpFactory"
import DaesinFactory from "../../core/domains/factories/carriers/DaesinFactory"
import IlyanglogisFactory from "../../core/domains/factories/carriers/IlyanglogisFactory"
import EMSFactory from "../../core/domains/factories/carriers/EMSFactory"
import CarrierDTO from "../../core/dtos/CarrierDTO"

export class CarrierRepository implements ICarrierRepository {
  async getCarriers(): Promise<ICarrierDTO[]> {
    const carrierDTOs = this.carriers.map((carrier) => {
      return this.convertToCarrierDTO(carrier)
    })
    return carrierDTOs
  }

  private carriers: ICarrier[] = [
    new EPostFactory().newCarrier(),
    new CJLogisticsFactory().newCarrier(),
    new HanjinFactory().newCarrier(),
    new LotteFactory().newCarrier(),
    new GSPostboxFactory().newCarrier(),
    new CUPostFactory().newCarrier(),
    new KDExpFactory().newCarrier(),
    new DaesinFactory().newCarrier(),
    new IlyanglogisFactory().newCarrier(),
    new EMSFactory().newCarrier()
  ]

  private convertToCarrierDTO(carrier: ICarrier): ICarrierDTO {
    return new CarrierDTO(
      carrier.no,
      carrier.id,
      carrier.name,
      carrier.isCrawlable,
      carrier
    )
  }
}
