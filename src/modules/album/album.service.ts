import { Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { tar } from 'compressing';

@Injectable()
export class AlbumService {
  constructor(private readonly configService: ConfigService) {}
  upload(file) {
    console.log(file);
  }
  async downloadAll() {
    const uploadDir = this.configService.get('file').root;
    const tarStream = new tar.Stream();
    await tarStream.addEntry(uploadDir);
    return { filename: 'hello-world.tar', tarStream };
  }
}
