import { Module } from '@nestjs/common';
import { CommerceModule } from './monolito-a/monolito-a.module';
import { UsersModule } from './monolito-b/monolito-b.module';

@Module({
  imports: [UsersModule, CommerceModule],
})
export class AppModule {}
