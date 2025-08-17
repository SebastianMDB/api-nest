export class Customer {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly isActive: boolean,
    public readonly purchases: Array<{ id: string; total: number }>,
  ) {}
}
