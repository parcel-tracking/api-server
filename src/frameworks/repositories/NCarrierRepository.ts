import { Injectable } from "@nestjs/common"
import ICarrierDTO from "../../core/dtos/interfaces/ICarrierDTO"
import { CarrierRepository } from "../../adapters/repositories/CarrierRepository"

@Injectable()
export class NCarrierRepository extends CarrierRepository {
  async getCarriers(): Promise<ICarrierDTO[]> {
    return super.getCarriers()
  }
}
