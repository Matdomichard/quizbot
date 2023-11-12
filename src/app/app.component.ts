import { Component, OnInit } from '@angular/core';
import { QuestionManagementService } from './question-management.service'; 
import { EvaluationService } from './evaluation.service';
import { Question } from './models/question.model';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firebaseConfig = environment.firebaseConfig;
  currentTopic: string = 'Entretien Java Facile';
  currentQuestion!: Question; 
  isCorrect: boolean | null = null;
  feedbackMessage: string | null = null;

  constructor(
    private questionService: QuestionManagementService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit() {
    this.onSubjectSelected(this.currentTopic);
  }

  onSubjectSelected(currentTopic: string) {
    this.questionService.getFirstQuestion(currentTopic).subscribe((question: Question | null) => {
      if (question) {
        this.currentQuestion = question;
      } else {
        this.feedbackMessage = "Pas de questions disponibles.";
      }
    });
  }

  onNextQuestionClicked() {
    this.questionService.getNextQuestion(this.currentTopic).subscribe((question: Question | null) => {
      if (question) {
        this.currentQuestion = question;
        this.isCorrect = null; // Réinitialiser l'état de la réponse
        this.feedbackMessage = null;
      } else {
        this.feedbackMessage = "Pas de questions disponibles.";
      }
    });
  }

  onAnswerSubmitted(answer: string) {
    if (this.currentQuestion) {
      this.evaluationService.evaluateAnswer(answer, this.currentQuestion).subscribe(evaluationResult => {
        this.isCorrect = evaluationResult.isCorrect;
        this.feedbackMessage = this.isCorrect ? "Votre réponse est correcte!" : `Incorrect. La bonne réponse est : ${evaluationResult.correctAnswer}`;
      });
    } else {
      console.error("Question actuelle non disponible.");
      this.feedbackMessage = "Erreur : Question non disponible.";
    }
  }
}
