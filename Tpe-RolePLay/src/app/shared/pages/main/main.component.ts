import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loading: boolean = true;
  progress: number = 0;
  textRotation: string = 'rotate(0deg)';
  phrases: string[] = [
    '¡Prepárate para la aventura!',
    'Explora mundos virtuales',
    'Conviértete en un héroe',
    'Descubre nuevos desafíos',
  ];
  currentPhraseIndex: number = 0;
  ngOnInit() {
    this.startLoading();
    setInterval(() => {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    }, 2000);
  }
  startLoading() {
    const interval = 100;
    const totalSteps = 100;
    const totalTime = 2000;
    const stepSize = totalSteps / (totalTime / interval);

    const loadingInterval = setInterval(() => {
      this.progress += stepSize;
      if (this.progress >= 100) {
        clearInterval(loadingInterval);
        this.loading = false; // Ocultar el spinner cuando la carga esté al 100%
      }
    }, interval);
  }
}
