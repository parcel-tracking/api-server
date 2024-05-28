import { Module } from "@nestjs/common"
import { CarrierModule } from "./CarrierModule"
import { AppController } from "../controllers/AppController"

@Module({
  imports: [CarrierModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
