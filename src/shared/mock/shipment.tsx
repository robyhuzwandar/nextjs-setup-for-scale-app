export interface Shipment {
  name: string;
  fee: number;
}

export const shipment: Shipment[] = [
  {
    name: 'GO-SEND',
    fee: 15000,
  },
  {
    name: 'JNE',
    fee: 9000,
  },
  {
    name: 'Personal Courier',
    fee: 29000,
  },
];
