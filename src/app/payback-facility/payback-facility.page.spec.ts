import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybackFacilityPage } from './payback-facility.page';

describe('PaybackFacilityPage', () => {
  let component: PaybackFacilityPage;
  let fixture: ComponentFixture<PaybackFacilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybackFacilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybackFacilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
