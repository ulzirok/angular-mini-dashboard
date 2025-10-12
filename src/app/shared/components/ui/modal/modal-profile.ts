import { Component, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../../models/userInfo-model';

@Component({
  selector: 'app-modal-profile',
  standalone: false,
  templateUrl: './modal-profile.html',
  styleUrls: ['./modal-profile.scss'],
})
export class ModalProfile implements OnInit {
  formUpdating!: FormGroup;
  fb = inject(FormBuilder);
  selectedPhoto: string | null = null;
  @Input() user!: IUser | null;
  @Output() closeBtn = new EventEmitter();
  @Output() update = new EventEmitter();

  ngOnInit(): void {
    this.formUpdating = this.fb.group({
      name: ['', [Validators.required]],
      about: [''],
      email: ['', [Validators.required, Validators.email]],
      photo: [''],
    });
  }

  onClose() {
    this.closeBtn.emit();
  }

  onUpdate() {
    if (this.formUpdating.invalid) return;
    const updatedUser = {
      ...this.formUpdating.value,
      photo: this.selectedPhoto,
    };
    this.update.emit(updatedUser);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      this.selectedPhoto = fileReader.result as string;
    };

    fileReader.readAsDataURL(file);
  }
}
