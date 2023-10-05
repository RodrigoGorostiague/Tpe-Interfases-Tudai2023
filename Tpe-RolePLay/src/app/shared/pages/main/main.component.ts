import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loading: boolean = true;
  progress: number = 0;
  ngOnInit() {
    this.startLoading();
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
