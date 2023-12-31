import {
  Controller,
  Get,
  Query,
  Headers,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HelloService } from './hello.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Hello, UserRole } from './classes/hello';
@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  // search
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: 'get ...',
    type: Hello,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }
  // create
  @Post()
  @ApiBody({ description: '填写更新内容' })
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }
  // update
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: 'Please input message' })
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // delete
  @Delete()
  @ApiQuery({ name: 'id', required: true })
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
