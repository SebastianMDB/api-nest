import { Module } from '@nestjs/common';
import { OrdersController } from './presentation/controllers/orders';
import { GetOrderWithCustomer } from './app/service/get-order';
import { IUsersPort } from './domain/ports/user';
import { UsersAdapter } from './infra/adapters/user';
import { UsersModule } from '../monolito-b/monolito-b.module';

@Module({
  imports: [UsersModule], // para inyectar la Facade
  controllers: [OrdersController],
  providers: [
    GetOrderWithCustomer,
    { provide: IUsersPort, useClass: UsersAdapter },
  ],
})
export class CommerceModule {}
