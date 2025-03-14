import { RedisModule, RedisModuleOptions } from "@liaoliaots/nestjs-redis";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { getEnvValue, loadEnv } from "./config/env.config";
import { DatabaseModule } from "./db/db.module";

// import { OriginGuard } from "./modules/auth/guards/origin.guard";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadEnv],
      isGlobal: true,
    }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // @ts-expect-error: broken types -> https://github.com/liaoliaots/nestjs-redis/issues/552
      useFactory: async (
        configService: ConfigService,
      ): Promise<RedisModuleOptions> => {
        return {
          config: {
            url: getEnvValue(configService, "REDIS_URI"),
          },
        };
      },
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connectionString: getEnvValue(configService, "POSTGRES_URI"),
      }),
    }),
    // UserModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
