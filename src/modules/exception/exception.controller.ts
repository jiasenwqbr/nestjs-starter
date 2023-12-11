import {
  Get,
  Query,
  Headers,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Delete,
  Patch,
  Param,
  Controller,
  UseFilters,
} from '@nestjs/common';
import { ExceptionService } from './exception.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiHeader,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
@ApiBearerAuth()
@ApiTags('exception')
@UseFilters(new HttpExceptionFilter())
@Controller('/exception')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}
  // Search
  @Get()
  @ApiQuery({ name: 'id', description: 'id is required' })
  @ApiHeader({ name: 'token' })
  fetch(@Query() { id }, @Headers('token') token): string {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: ' id is required!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('token', token);
    return this.exceptionService.fetch(id);
  }
  // create
  @Post()
  @ApiBody({ description: 'please input message' })
  save(@Body() { message }): string {
    return this.exceptionService.save(message);
  }

  @Patch()
  @ApiParam({ name: 'id' })
  @ApiBody({ description: 'please input message' })
  update(@Param() { id }, @Body() { message }): string {
    return this.exceptionService.update(id, message);
  }
  @Delete()
  remove(@Query() { id }): string {
    return this.exceptionService.remove(id);
  }
}
