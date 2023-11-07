import { Component, OnInit } from '@angular/core';
import { QuestionManagementService } from './question-management.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentQuestion: any; // Remplacer par le type approprié
  feedbackMessage: string | null = null;

  constructor(private questionService: QuestionManagementService) {}

  ngOnInit() {
    // Ici, on initialiseune catégorie et un sujet par défaut si vous le souhaitez
    this.onSubjectSelected('Entretien Java Facile'); // Exemple avec 'java' comme sujet par défaut
  }

  onSubjectSelected(topic: string) {
    this.questionService.getQuestionsForTopic(topic, 'java').subscribe(questions => {
      if (questions.length > 0) {
      this.currentQuestion = questions.length > 0 ? questions[0] : null;
      } else {
      // Gérer le cas où il n'y a pas de questions
      this.currentQuestion = "Pas de questions disponibles.";
    }
    });
  }

  onAnswerSubmitted(answer: string) {
    // Logique pour vérifier la réponse et mettre à jour feedbackMessage
  }
}
