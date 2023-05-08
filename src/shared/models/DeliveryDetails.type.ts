export interface DeliveryDetails {
  name: string;
  email: string;
  deliveryAddress: string;
  dropshipperName?: string;
  dropshipperPhoneNumber?: string;
  isSendAsDropshipper: boolean;
}
