export class User {
  constructor(
    public number: number,
    public currentBalance: number,
    public firstname: string,
    public lastname: string,
    public password: string,
    public paymentinfo: any,
  ) {}
}
