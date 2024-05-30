import { Injectable } from "@nestjs/common"
import CarrierUseCase from "../../core/domains/usecases/CarrierUseCase"
import NCarrierRepository from "../repositories/NCarrierRepository"

@Injectable()
export default class NCarrierUseCase extends CarrierUseCase {
  constructor(carrierRepository: NCarrierRepository) {
    super(carrierRepository)
  }
}
