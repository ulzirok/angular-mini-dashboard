import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  isEditModalOpen: boolean = false;

  openModal() {
    
    this.isEditModalOpen = true
    // document.body.classList.add('lock');
  }
  
  closeModal() {
    this.isEditModalOpen = false
    // document.body.classList.remove('lock');
  }
  
}
