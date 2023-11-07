import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-display',
  templateUrl: './feedback-display.component.html',
  styleUrls: ['./feedback-display.component.css']
})
export class FeedbackDisplayComponent {
  @Input() isCorrect: boolean | null = null; // 'null' when no feedback is available
  @Input() message: string = '';

  constructor() { }
}
