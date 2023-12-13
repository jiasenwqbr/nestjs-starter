import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';

@Module({
  imports: [HelloModule, ExceptionModule, RoleGuardModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
