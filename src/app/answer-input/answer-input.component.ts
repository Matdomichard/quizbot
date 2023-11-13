// answer-input.component.ts
import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.css']
})
export class AnswerInputComponent implements AfterViewInit {
  @ViewChild('textarea') textarea!: ElementRef;
  userAnswer: string = ''; // Initializes the user answer with an empty string
  @Output() answerSubmitted = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit() {
    this.autoExpand();
  }

  autoExpand() {
    const textarea = this.textarea.nativeElement;
    textarea.addEventListener('input', () => {
      textarea.style.height = 'inherit';
      const height = textarea.scrollHeight;
      textarea.style.height = `${height}px`;
    });
  }
  

  onSubmit() {
    this.answerSubmitted.emit(this.userAnswer); // Emit the user answer
    this.userAnswer = ''; // Reset the input field
    this.autoExpand(); // Reset the textarea height
  }
}
