import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
import { AppLoggerMiddleware } from './middleware/apploggermiddleware';
import { RouteModule } from './route.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, RouteModule],
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideInterceptor(AppLoggerMiddleware)
      .useValue(AppLoggerMiddleware)
      .compile();
    const app = module.createNestApplication();
    app.useGlobalInterceptors(new TimeoutInterceptor());
    appController = module.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
