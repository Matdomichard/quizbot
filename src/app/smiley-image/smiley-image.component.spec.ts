import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyImageComponent } from './smiley-image.component';

describe('SmileyImageComponent', () => {
  let component: SmileyImageComponent;
  let fixture: ComponentFixture<SmileyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmileyImageComponent]
    });
    fixture = TestBed.createComponent(SmileyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
