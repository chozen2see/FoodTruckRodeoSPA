/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TruckComponent } from './truck.component';

describe('TruckComponent', () => {
  let component: TruckComponent;
  let fixture: ComponentFixture<TruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
