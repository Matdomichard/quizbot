// app-image-smiley.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-smiley-image',
  templateUrl: './smiley-image.component.html',
  styleUrls: ['./smiley-image.component.css']
})
export class SmileyImageComponent implements OnChanges {
  @Input() feedback!: 'correct' | 'incorrect' | 'neutre';
  currentImageUrl: string = '/assets/img/neutral.png'; // Image par défaut

  ngOnChanges(changes: SimpleChanges) {
    if (this.feedback) {
      this.updateImage();
    }
  }

  updateImage() {
    switch (this.feedback) {
      case 'correct':
        this.currentImageUrl = '/assets/img/happy.png';
        break;
      case 'incorrect':
        this.currentImageUrl = '/assets/img/sad.png';
        break;
      default:
        this.currentImageUrl = '/assets/img/neutral.png';
    }

    if (this.feedback !== 'neutre') {
      setTimeout(() => {
        this.currentImageUrl = '/assets/img/neutral.png';
      }, 1000); // Revenir à l'image neutre après 3 secondes
    }
  }

  getImageUrl() {
    return this.currentImageUrl;
  }
}
