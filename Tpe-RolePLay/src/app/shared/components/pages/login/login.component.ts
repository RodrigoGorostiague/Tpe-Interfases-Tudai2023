import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private route: Router,
    private fb: FormBuilder
  ) { }

  login() {

    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.route.navigate(['/home']);
    }
  }

  register() {
      this.route.navigate(['/singin']);
  }
}
