import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-menu',
  templateUrl: './perfil-menu.component.html',
  styleUrls: ['./perfil-menu.component.scss']
})
export class PerfilMenuComponent {
  @Input() isOpenPerfil!: boolean;
  close(){
    this.isOpenPerfil = false;
  }
}
