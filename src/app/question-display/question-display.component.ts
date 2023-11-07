// question-display.component.ts
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent {
  @Input() question!: any; 
  @Output() nextQuestion = new EventEmitter<void>();

  onNextQuestion(): void {
    // On emet l'événement lorsque le bouton est cliqué
    this.nextQuestion.emit();
  }
  constructor() { }
}
