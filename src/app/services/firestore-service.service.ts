import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  getSubjects(): Observable<string[]> {
    return this.firestore.collection('categories').snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.id))
      
    );
  }
  
}
