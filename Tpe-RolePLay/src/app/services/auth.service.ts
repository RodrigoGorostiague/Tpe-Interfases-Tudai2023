import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string | null | undefined, password: string | null | undefined): boolean  {
    if (email === 'user@user.com' && password === 'user') {
      // Credenciales válidas
      localStorage.setItem('currentUser', 'user@user.com');
      return true;
    }
    // Credenciales inválidas
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
