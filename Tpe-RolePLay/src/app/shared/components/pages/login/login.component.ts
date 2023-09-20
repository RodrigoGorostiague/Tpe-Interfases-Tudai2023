import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    // Implementa la lógica para iniciar sesión aquí.
  }

  register() {
    // Implementa la lógica para registrarse aquí.
  }
}
