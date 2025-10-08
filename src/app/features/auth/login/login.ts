import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  loginForm!: FormGroup
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('user@mail.com', [Validators.required, Validators.email]),
      'password': new FormControl('123QWEasd', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])
    })
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((user) => {
        if (user) {
          const fakeToken = Math.random().toString(36).substring(2); // создаём фейковый токен
          this.authService.setToken(fakeToken); //сохраняем токен в localStorage

          this.router.navigate(['/dashboard']);
        } else {
          alert('Неверный логин или пароль');
        }
      });
    }
  }
  
}
