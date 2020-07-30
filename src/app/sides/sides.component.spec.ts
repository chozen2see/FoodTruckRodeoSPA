/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidesComponent } from './sides.component';

describe('SidesComponent', () => {
  let component: SidesComponent;
  let fixture: ComponentFixture<SidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
