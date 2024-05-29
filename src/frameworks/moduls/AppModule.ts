import { Module } from "@nestjs/common"
import { AppController } from "../controllers/AppController"
import TrackerModule from "./TrackerModule"

@Module({
  imports: [TrackerModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
