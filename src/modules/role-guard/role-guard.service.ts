import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuardService {
  fetch(id): string {
    return `Hello world! ${id}`;
  }
  save(message): string {
    return `set done .${message}`;
  }
  update(id: string, message: string): string {
    return `Update ${id} ${message}`;
  }
  remove(id: number): string {
    return `${id} is removed`;
  }
}
