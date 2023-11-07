import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDisplayComponent } from './feedback-display.component';

describe('FeedbackDisplayComponent', () => {
  let component: FeedbackDisplayComponent;
  let fixture: ComponentFixture<FeedbackDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackDisplayComponent]
    });
    fixture = TestBed.createComponent(FeedbackDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
