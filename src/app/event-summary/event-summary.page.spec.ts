import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryPage } from './event-summary.page';

describe('EventSummaryPage', () => {
  let component: EventSummaryPage;
  let fixture: ComponentFixture<EventSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
