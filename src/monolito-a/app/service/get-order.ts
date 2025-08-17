import { Injectable } from '@nestjs/common';
import { IUsersPort } from '../../domain/ports/user';

@Injectable()
export class GetOrderWithCustomer {
  constructor(private readonly usersPort: IUsersPort) {}

  async execute(orderId: string) {
    const customerId = 'u-123'; // demo
    const customer = await this.usersPort.getCustomerProfile(customerId);
    return { orderId, customer };
  }
}
