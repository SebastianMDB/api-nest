import { Injectable } from '@nestjs/common';
import { UsersAppService } from '../service/user';
import { PurchasesAppService } from '../service/purchase';

export interface UserProfileDTO {
  id: string; email: string; name: string; isActive: boolean;
  purchases: Array<{ id: string; total: number }>;
}

@Injectable()
export class UsersFacade {
  constructor(
    private readonly usersSvc: UsersAppService,
    private readonly purchasesSvc: PurchasesAppService,
  ) {}

  async getUserProfile(userId: string): Promise<UserProfileDTO | null> {
    const u = await this.usersSvc.getUserById(userId);
    if (!u) return null;
    const p = await this.purchasesSvc.getByUser(userId);
    return { id: u.id, email: u.email, name: u.name, isActive: u.isActive, purchases: p };
  }
}
