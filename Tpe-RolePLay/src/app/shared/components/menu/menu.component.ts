import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isOpen!: boolean;
  close(){
    this.isOpen = false;
  }
}
