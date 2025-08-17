import { Controller, Get, Param } from '@nestjs/common';
import { UsersFacade } from '../../app/facade/user';

@Controller('users')
export class UsersController {
  constructor(private readonly facade: UsersFacade) {}

  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.facade.getUserProfile(id);
  }
}
