import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmileyImageComponent } from './smiley-image/smiley-image.component';
import { SubjectSelectorComponent } from './subject-selector/subject-selector.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { AnswerInputComponent } from './answer-input/answer-input.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SmileyImageComponent,
    SubjectSelectorComponent,
    QuestionDisplayComponent,
    AnswerInputComponent,
    FeedbackDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
