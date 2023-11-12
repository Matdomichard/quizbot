import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor() {}

  evaluateAnswer(userAnswer: string, question: Question): Observable<{ isCorrect: boolean, correctAnswer: string }> {
    return of(this.evaluate(userAnswer, question));
  }

  private evaluate(userAnswer: string, question: Question): { isCorrect: boolean, correctAnswer: string } {
    if (question) {
      const correctAnswer = question.answer;
      const keywords = question.keywords;

      let isCorrect = keywords.some(keyword => userAnswer.includes(keyword));
      return { isCorrect, correctAnswer };
    } else {
      return { isCorrect: false, correctAnswer: '' };
    }
  }
}
