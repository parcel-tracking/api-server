import { NestFactory } from "@nestjs/core"
import { AppModule } from "./frameworks/moduls/AppModule"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // const allowedOrigins = [
  //   `chrome-extension://${process.env.EXTENSION_TEST_ID}`,
  //   `chrome-extension://${process.env.EXTENSION_ID}`
  // ]

  // app.enableCors({
  //   origin: (origin, callback) => {
  //     if (!origin || allowedOrigins.includes(origin)) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error("Not allowed by CORS"))
  //     }
  //   },
  //   credentials: true
  // })

  // Code for application review
  app.enableCors({
    origin: "*"
  })

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
