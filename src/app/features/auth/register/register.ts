import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit{
  registerForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  
  submitRegister() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: () => console.log('Регистрация прошла успешно'),
      error: (err) => {
        if (err.message === 'Пользователь уже существует') {
          alert('Такой пользователь уже зарегистрирован!');
          this.router.navigate(['/auth/login']);
        } else {
          alert('Ошибка регистрации');
        }
      }
    });
  }
}
