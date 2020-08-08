export interface Cart {
  id: number;
  subTotal: number;
  tax: number;
  total: number;
  isPurchaseComplete: boolean;
  isOrderFilled: boolean;
  foodTruckId: number;
  userId: number;
  cartItemDetails?: any[];
}
