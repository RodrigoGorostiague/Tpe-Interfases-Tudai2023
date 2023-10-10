import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['user@user.com', Validators.required],
    password: ['user', Validators.required]
  });
  valido!: boolean;
  error!: boolean;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (this.authService.login(email, password)) {
        this.route.navigate(['/home']);
      } else {
        this.error = false; // Credenciales inválidas, puedes mostrar un mensaje de error
      }
    } else {
      this.valido = false; // Formulario no válido, puedes mostrar un mensaje de error
    }
  }

  register() {
      this.route.navigate(['/singin']);
  }
}
