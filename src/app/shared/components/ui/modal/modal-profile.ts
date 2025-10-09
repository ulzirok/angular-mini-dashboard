import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-profile',
  standalone: false,
  templateUrl: './modal-profile.html',
  styleUrls: ['./modal-profile.scss']
})
export class ModalProfile {
  @Output() close = new EventEmitter() 
  
  onClose() {
    this.close.emit()
  }
}
