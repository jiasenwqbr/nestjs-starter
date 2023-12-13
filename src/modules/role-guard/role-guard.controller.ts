import { Controller, Get, Query } from '@nestjs/common';
import { RoleGuardService } from './role-guard.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags('role-gurd')
@Controller('/role-gurd')
export class RoleGurdController {
  constructor(private readonly roleGurdService: RoleGuardService) {}

  // 查询
  @Get()
  @Roles('admin')
  fetch(@Query() { id }): string {
    return this.roleGurdService.fetch(id);
  }
}
