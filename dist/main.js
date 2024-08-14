"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const AppModule_1 = require("./frameworks/moduls/AppModule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule_1.AppModule);
    const allowedOrigins = [
        `chrome-extension://${process.env.EXTENSION_TEST_ID}`,
        `chrome-extension://${process.env.EXTENSION_ID}`
    ];
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map