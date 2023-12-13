import { Module } from '@nestjs/common';
import { RoleGurdController } from './role-guard.controller';
import { RoleGuardService } from './role-guard.service';

@Module({
  imports: [],
  controllers: [RoleGurdController],
  providers: [RoleGuardService],
})
export class RoleGuardModule {}
