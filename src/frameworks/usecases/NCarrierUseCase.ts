import { Inject, Injectable } from "@nestjs/common"
import CarrierUseCase from "../../core/domains/usecases/CarrierUseCase"
import NCarrierRepository from "../repositories/NCarrierRepository"

@Injectable()
export default class NCarrierUseCase extends CarrierUseCase {
  constructor(
    @Inject("ICarrierRepository") carrierRepository: NCarrierRepository
  ) {
    super(carrierRepository)
  }
}
