export interface Payment {
  name: string;
  balance: number;
}

export const payment: Payment[] = [
  {
    name: 'e-Wallet',
    balance: 1500000,
  },
  {
    name: 'Bank Transfer',
    balance: 0,
  },
  {
    name: 'Virtual Account',
    balance: 0,
  },
];
