import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { AppModule } from "./app.module";
import { getEnvValue } from "./config/env.config";
import { ZodFilter } from "./config/zod-filter.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(helmet());

  const logger = new Logger("NestFactory");
  const configService = app.get(ConfigService);

  const FRONTEND_URL = getEnvValue(configService, "FRONTEND_URL");
  const ADMIN_FRONTEND_URL = getEnvValue(configService, "ADMIN_FRONTEND_URL");
  const PORT = getEnvValue(configService, "PORT") || 3000;

  app.enableCors({
    origin: [FRONTEND_URL, ADMIN_FRONTEND_URL],
    credentials: true,
  });

  app.useGlobalFilters(new ZodFilter());

  await app.listen(PORT);

  logger.log(`🚀 Backend Server is Running at http://localhost:${PORT} 🚀`);
}
bootstrap();
