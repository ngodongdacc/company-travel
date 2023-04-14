import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AppLoggerMiddleware } from './middleware/apploggermiddleware';
import { RouteModule } from './route.module';

@Module({
  imports: [ConfigModule, RouteModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
