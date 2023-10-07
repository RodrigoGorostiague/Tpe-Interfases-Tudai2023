import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() comment: string = '';
  @Input() stars: number = 0;
  starArray = [1, 2, 3, 4, 5];
}
