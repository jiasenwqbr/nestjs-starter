import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {
  fetch(id): string {
    return `Hello World! ${id}`;
  }

  save(message): string {
    return `save message ok! ${message}`;
  }

  update(id: string, message: string): string {
    return `update Ok! ${id} ${message}`;
  }

  remove(id): string {
    return `remove ${id} record ok`;
  }
}
