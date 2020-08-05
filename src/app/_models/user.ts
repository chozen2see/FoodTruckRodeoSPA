export interface User {
  // replicate what we are returning for user
  id: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  isAdmin: boolean;
  foodTruckId: number;
}
