import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagementService {
  private lastVisible: any; // Utilisé pour la pagination des données

  constructor(private firestore: AngularFirestore) {}

  getFirstQuestion(topic: string): Observable<any> {
    return this.firestore.collection(`categories/${topic}/topics/java/questions`, ref => ref.limit(1))
      .snapshotChanges()
      .pipe(
        map(actions => {
          console.log(actions);
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as any;
            const id = actions[0].payload.doc.id;
            this.lastVisible = actions[0].payload.doc; // Stocke le dernier document visible pour la pagination
            return { id, ...data };
          } else {
            return null; // Aucune question disponible
          }
        }),
        catchError(error => {
          console.error('Error fetching first question:', error);
          return of(null); // Renvoie null en cas d'erreur
        })
      );
  }

  getNextQuestion(topic: string): Observable<any> {
    if (!this.lastVisible) {
      return this.getFirstQuestion(topic); // Si lastVisible n'est pas défini, récupère la première question
    }

    return this.firestore.collection(`categories/${topic}/topics/java/questions`, ref => ref.startAfter(this.lastVisible).limit(1))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 0) {
            const data = actions[0].payload.doc.data() as any;
            const id = actions[0].payload.doc.id;
            this.lastVisible = actions[0].payload.doc; // Met à jour le dernier document visible pour la pagination
            return { id, ...data };
          } else {
            this.lastVisible = null; // Réinitialise lastVisible si aucune question suivante n'est disponible
            return null; // Aucune question suivante disponible
          }
        }),
        catchError(error => {
          console.error('Error fetching next question:', error);
          return of(null); // Renvoie null en cas d'erreur
        })
      );
  }
}
