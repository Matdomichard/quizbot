// app-image-smiley.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smiley-image',
  templateUrl: './smiley-image.component.html',
  styleUrls: ['./smiley-image.component.css']
})
export class SmileyImageComponent {
  @Input() feedback!: 'correct' | 'incorrect';

  getImageUrl() {
    switch (this.feedback) {
      case 'correct':
        return '/assets/img/happy.png'; 
      case 'incorrect':
        return '/assets/img/sad.png'; 
      default:
        return '/assets/img/neutral.png';
  }
}
}
