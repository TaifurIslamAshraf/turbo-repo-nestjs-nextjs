import { getEnvValue } from "@/config/env.config";
import { ConfigService } from "@nestjs/config";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const configService = new ConfigService();

export default defineConfig({
  schema: "./src/**/*.sql.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: getEnvValue(configService, "POSTGRES_URI"),
  },
});
