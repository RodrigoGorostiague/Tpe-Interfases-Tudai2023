import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private route: Router
  ) { }

  login() {
    this.route.navigate(['/home']);
  }

  register() {
    this.route.navigate(['/singin']);
  }
}
