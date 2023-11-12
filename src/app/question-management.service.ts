import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagementService {
  private lastVisible: any; // Utilisé pour la pagination des données

  constructor(private firestore: AngularFirestore) {}

  getFirstQuestion(topic: string): Observable<Question | null> {
    return this.firestore.collection(`categories/${topic}/questions`, ref => ref.limit(1))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as Question;
            this.lastVisible = actions[0].payload.doc;
            return data; 
          } else {
            return null;
          }
        }),
        catchError(error => {
          console.error('Error fetching first question:', error);
          return of(null);
        })
      );
  }

  getNextQuestion(topic: string): Observable<Question | null> {
    if (!this.lastVisible) {
      console.error("Last visible not set");
      return this.getFirstQuestion(topic);
    }
  
    return this.firestore.collection(`categories/${topic}/questions`, ref => ref.startAfter(this.lastVisible).limit(1))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as Question;
            this.lastVisible = actions[0].payload.doc;
            return data; // Retourne directement data qui contient déjà un id
          } else {
            this.lastVisible = null;
            return null;
          }
        }),
        catchError(error => {
          console.error('Error fetching next question:', error);
          return of(null);
        })
      );
  }
  
}
