import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  carritoVisible = false;
  toggleCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }
}
