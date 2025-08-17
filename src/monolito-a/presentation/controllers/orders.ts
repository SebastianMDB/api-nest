import { Controller, Get, Param } from '@nestjs/common';
import { GetOrderWithCustomer } from '../../app/service/get-order';

@Controller('orders')
export class OrdersController {
  constructor(private readonly getOrderWithCustomer: GetOrderWithCustomer) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.getOrderWithCustomer.execute(id);
  }
}
