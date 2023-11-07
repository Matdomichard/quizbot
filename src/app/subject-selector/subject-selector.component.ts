import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css']
})
export class SubjectSelectorComponent {
  subjects = ['Entretien Java Facile','Entretien Java Intermédiaire','Entretien Java Difficile']; 
  selectedSubject!: string;

  @Output() subjectSelected = new EventEmitter<string>();

  constructor() {}

  onSubjectChange(target: EventTarget | null): void {
    if (target instanceof HTMLSelectElement) {
      const value = target.value;
    this.selectedSubject = value;
    this.subjectSelected.emit(this.selectedSubject);
  }
}
}
