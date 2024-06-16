import { NestFactory } from "@nestjs/core"
import { AppModule } from "./frameworks/moduls/AppModule"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: "*"
  })
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
