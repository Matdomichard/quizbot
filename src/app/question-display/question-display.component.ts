// question-display.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent {
  @Input() question!: any; 

  constructor() { }
}
