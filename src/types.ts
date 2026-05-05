
export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type DeliveryMethod = 'pickup' | 'delivery';
