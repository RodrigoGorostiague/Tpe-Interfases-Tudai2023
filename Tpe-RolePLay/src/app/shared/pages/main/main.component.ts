import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loading: boolean = true;
  progress: number = 0;
  textRotation: string = 'rotate(0deg)'; // Inicialmente sin rotación
  phrases: string[] = [
    '¡Prepárate para la aventura!',
    'Explora mundos virtuales',
    'Conviértete en un héroe',
    'Descubre nuevos desafíos',
    // Agrega más frases relacionadas a videojuegos aquí
  ];
  currentPhraseIndex: number = 0;
  ngOnInit() {
    this.startLoading();
    setInterval(() => {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    }, 2000); // Cambiar la frase cada 2 segundos (ajusta el tiempo según desees)
  }
  startLoading() {
    const interval = 100; // Intervalo de actualización en milisegundos
    const totalSteps = 100;
    const totalTime = 10000; // 10 segundos en milisegundos
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
