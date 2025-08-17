import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchasesAppService {
  async getByUser(userId: string): Promise<Array<{ id: string; total: number }>> {
    return [{ id: 'p-1', total: 42.5 }];
  }
}
