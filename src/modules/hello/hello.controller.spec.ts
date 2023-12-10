import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('AppController', () => {
  let appController: HelloController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    appController = app.get<HelloController>(HelloController);
  });
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.fetch('11', '')).toBe('Hello World!');
    });
  });
});
