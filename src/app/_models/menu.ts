import { Item } from './item';

export interface Menu {
  id: number;
  name: string;
  sortOrder: number;
  isActive: boolean;
  foodTruckId: number;
  items?: Item[];
}
