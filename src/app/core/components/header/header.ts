import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout() {
    const isConfirmed = confirm('Вы уверены, что хотите покинуть страницу?');
    if (!isConfirmed) return;
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
