import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input()progress: number = 0;
  loading: boolean = true;

  ngOnInit() {
    this.startLoading();
  }

  startLoading() {
    const interval = 100;
    const totalSteps = 100;
    const totalTime = 5000;
    const stepSize = totalSteps / (totalTime / interval);

    const loadingInterval = setInterval(() => {
      this.progress += stepSize;
      if (this.progress >= 100) {
        clearInterval(loadingInterval);
        this.loading = false;
      }
    }, interval);
  }
}
