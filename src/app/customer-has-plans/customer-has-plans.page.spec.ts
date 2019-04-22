import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHasPlansPage } from './customer-has-plans.page';

describe('CustomerHasPlansPage', () => {
  let component: CustomerHasPlansPage;
  let fixture: ComponentFixture<CustomerHasPlansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHasPlansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHasPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
