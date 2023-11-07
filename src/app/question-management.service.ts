import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionManagementService {
  
  constructor(private firestore: AngularFirestore) {}

  getQuestionsForTopic(categorie: string, topics: string): Observable<any[]> {
    // categorie > collection topics > doc  java > collection questions
    return this.firestore.collection(`categories/${categorie}/topics/${topics}/questions`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; 
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
