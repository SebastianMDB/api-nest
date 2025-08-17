import { Module } from '@nestjs/common';
import { UsersAppService } from './app/service/user';
import { PurchasesAppService } from './app/service/purchase';
import { UsersFacade } from './app/facade/user';
import { UsersController } from './presentation/controller/user';

@Module({
  providers: [UsersAppService, PurchasesAppService, UsersFacade],
  controllers: [UsersController],
  exports: [UsersFacade], // <- lo importará A
})
export class UsersModule {}
