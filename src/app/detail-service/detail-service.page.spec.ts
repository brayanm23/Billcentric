import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServicePage } from './detail-service.page';

describe('DetailServicePage', () => {
  let component: DetailServicePage;
  let fixture: ComponentFixture<DetailServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
