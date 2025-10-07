import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private router: Router) { }

  login(form: any) {
    if (form.valid) {
      // здесь вызов AuthService.login(form.value)
      // после успешного ответа:
      this.router.navigate(['/dashboard']);
    }
  }
}
