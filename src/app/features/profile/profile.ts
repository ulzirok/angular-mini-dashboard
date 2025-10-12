import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { IUser } from '../../models/userInfo-model';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  userService = inject(UserService);
  isEditModalOpen = false;
  user!: IUser | null;

  ngOnInit(): void {
    // this.userService.user()
    this.user = this.userService.user();
  }

  updateProfile(user: IUser) {
    this.userService.updateProfile(user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        alert('Редактирование успешно завершена');
        this.isEditModalOpen = false;
      },
      error: (err) => {
        console.error('Ошибка при обновлении профиля:', err);
      },
    });
  }

  openModal() {
    this.isEditModalOpen = true;
  }

  closeModal() {
    this.isEditModalOpen = false;
  }
}
