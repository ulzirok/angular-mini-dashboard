import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class Modal {
  @Output() close = new EventEmitter() 
  
  onClose() {
    this.close.emit()
  }
}
