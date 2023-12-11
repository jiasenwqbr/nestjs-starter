import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [HelloModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
