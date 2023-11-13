import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagementService {
  private questions: Question[] = [];
  private currentIndex = 0;

  constructor(private firestore: AngularFirestore) {}

  getFirstQuestion(topic: string): Observable<Question | null> {
    return this.firestore.collection(`categories/${topic}/questions`)
      .snapshotChanges()
      .pipe(
        take(1),
        map(actions => {
          const questions = actions.map(a => a.payload.doc.data() as Question);
          this.questions = this.shuffleArray(questions);
          this.currentIndex = 0;
          return this.questions.length > 0 ? this.questions[this.currentIndex++] : null;
        }),
        catchError(error => {
          console.error('Error fetching questions:', error);
          return of(null);
        })
      );
  }

  getNextQuestion(): Observable<Question | null> {
    if (this.currentIndex < this.questions.length) {
      return of(this.questions[this.currentIndex++]);
    } else {
      // Toutes les questions ont été servies, retourner null ou recommencer
      return of(null);
    }
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
