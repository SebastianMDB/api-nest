import { Injectable } from '@nestjs/common';
import { User } from 'src/monolito-b/domain/entity';

@Injectable()
export class UsersAppService {
  private data: Record<string, User> = {
    'u-123': new User('u-123', 'u123@example.com', 'Alice', true),
  };
  async getUserById(id: string): Promise<User | null> {
    return this.data[id] ?? null;
  }
}
