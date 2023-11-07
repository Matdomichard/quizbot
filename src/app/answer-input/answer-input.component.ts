// answer-input.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.css']
})
export class AnswerInputComponent {
  userAnswer: string = ''; // Initializes the user answer with an empty string
  @Output() answerSubmitted = new EventEmitter<string>();

  constructor() { }

  onSubmit() {
    this.answerSubmitted.emit(this.userAnswer); // where userAnswer is a string
    this.userAnswer = ''; // Reset the input field
  }
}
