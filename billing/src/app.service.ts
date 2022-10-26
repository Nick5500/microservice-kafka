import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOrders(data: any) {
    console.log('Hello from nestjs');
  }
}
