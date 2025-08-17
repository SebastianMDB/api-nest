import { Injectable } from '@nestjs/common';
import { IUsersPort } from '../../domain/ports/user';
import { Customer } from '../../domain/entity/customer';
import { UsersFacade } from '../../../monolito-b/app/facade/user'

@Injectable()
export class UsersAdapter implements IUsersPort {
  constructor(private readonly usersFacade: UsersFacade) {}

  async getCustomerProfile(id: string): Promise<Customer | null> {
    const p = await this.usersFacade.getUserProfile(id);
    return p ? new Customer(p.id, p.name, p.email, p.isActive, p.purchases) : null;
  }
}
