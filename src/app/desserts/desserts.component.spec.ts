/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DessertsComponent } from './desserts.component';

describe('DessertsComponent', () => {
  let component: DessertsComponent;
  let fixture: ComponentFixture<DessertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
