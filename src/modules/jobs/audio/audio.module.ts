import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from 'nestjs-config';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'audio',
      useFactory: (config: ConfigService) => ({ redis: config.get('redis') }),
    }),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule {}
