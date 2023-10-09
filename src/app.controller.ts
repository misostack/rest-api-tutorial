import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './schemas/cat.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Cat[]> {
    return this.appService.getHello();
  }
}
