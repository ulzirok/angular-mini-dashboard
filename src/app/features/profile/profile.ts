import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  userService = inject(UserService)
  isEditModalOpen: boolean = false;
  
  ngOnInit(): void {
    this.userService.user()
  }

  openModal() {
    
    this.isEditModalOpen = true
    // document.body.classList.add('lock');
  }
  
  closeModal() {
    this.isEditModalOpen = false
    // document.body.classList.remove('lock');
  }
  
}
