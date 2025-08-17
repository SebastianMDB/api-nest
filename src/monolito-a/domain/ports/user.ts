import { Customer } from '../entity/customer';

export abstract class IUsersPort {
  abstract getCustomerProfile(id: string): Promise<Customer | null>;
}
