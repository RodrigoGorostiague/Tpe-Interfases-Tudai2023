import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  isOpenPerfil = false;
  progress!: number;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  togglePerfilMenu() {
    this.isOpenPerfil = !this.isOpenPerfil;
  }
  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    console.log(this.isOpen);
    if (this.isOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu') && !target.closest('.menu-button')) {
        this.isOpen = false;
      }else{
        this.isOpen = true;
      }
      if (this.isOpenPerfil) {
        const target = event.target as HTMLElement;
        if (!target.closest('.menu') && !target.closest('.avatar')) {
          this.isOpenPerfil = false;
        }else{
          this.isOpenPerfil = true;
        }
      }
    }
  }



}
