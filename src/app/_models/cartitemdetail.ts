import { Item } from './item';

export interface CartItemDetail {
  id: number;
  quantity: number;
  itemId: number;
  cartId: number;
  item: Item;
}
