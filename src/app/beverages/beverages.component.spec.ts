/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeveragesComponent } from './beverages.component';

describe('BeveragesComponent', () => {
  let component: BeveragesComponent;
  let fixture: ComponentFixture<BeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
