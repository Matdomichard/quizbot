import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore-service.service'


@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css']
})
export class SubjectSelectorComponent implements OnInit {
  subjects: string[] = []; 
  selectedSubject!: string;

  @Output() subjectSelected = new EventEmitter<string>();

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getSubjects().subscribe(subjects => {
      console.log(subjects); // Ajoutez ceci pour déboguer
      this.subjects = subjects;
    });
  }
  

  onSubjectChange(target: EventTarget | null): void {
    if (target instanceof HTMLSelectElement) {
      const value = target.value;
    this.selectedSubject = value;
    this.subjectSelected.emit(this.selectedSubject);
  }
}
}
