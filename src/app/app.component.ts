import { Component, OnInit } from '@angular/core';
import { QuestionManagementService } from './question-management.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTopic: string = 'Entretien Java Facile';
  currentQuestion!: String; 
  feedbackMessage: string | null = null;

  constructor(private questionService: QuestionManagementService) {}

  ngOnInit() {
    // Ici, on initialiseune catégorie et un sujet par défaut si vous le souhaitez
    this.onSubjectSelected('Entretien Java Facile'); // Exemple avec 'java' comme sujet par défaut
  }

  onSubjectSelected(currentTopic: string) {
    this.questionService.getFirstQuestion(currentTopic).subscribe((question: any) => {
      if (question && question.question) {
        this.currentQuestion = question.question;
      } else {
        this.currentQuestion = "Pas de questions disponibles.";
      }
    });
  }

  onNextQuestionClicked(questionId: string): void {
    // Appelez la méthode pour charger la question suivante
    // Cela peut être une méthode dans votre service ou une logique directement dans ce composant
    this.questionService.getNextQuestion(this.currentTopic).subscribe((question: any) => {
      if (question && question.question) {
        this.currentQuestion = question.question;
      } else {
        this.currentQuestion = "Pas de questions disponibles.";
      }
    });
  }

  onAnswerSubmitted(answer: string) {
    // Logique pour vérifier la réponse et mettre à jour feedbackMessage
  }
}
