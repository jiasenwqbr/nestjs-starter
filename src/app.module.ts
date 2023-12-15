import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';
import { StatusMonitorModule } from 'nest-status-monitor';
import statusMonitor from './config/statusMonitor';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    StatusMonitorModule.setUp(statusMonitor),
    AuthModule,
    HelloModule,
    ExceptionModule,
    RoleGuardModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
