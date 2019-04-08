import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanPage } from './detail-plan.page';

describe('DetailPlanPage', () => {
  let component: DetailPlanPage;
  let fixture: ComponentFixture<DetailPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
