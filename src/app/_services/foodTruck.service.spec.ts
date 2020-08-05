/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodTruckService } from './foodTruck.service';

describe('Service: FoodTruck', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodTruckService]
    });
  });

  it('should ...', inject([FoodTruckService], (service: FoodTruckService) => {
    expect(service).toBeTruthy();
  }));
});
