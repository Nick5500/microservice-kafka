import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { Logger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {}

  @EventPattern('get_orders')
  getOrders(data: any) {
    this.logger.log(data);
    this.appService.getOrders(data);
  }
}
