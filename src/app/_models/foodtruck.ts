import { Menu } from './menu';

export interface FoodTruck {
  id: number;
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  menus?: Menu[];
}
