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
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  // search
  @Get()
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }
  // create
  @Post()
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }
  // update
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // delete
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
