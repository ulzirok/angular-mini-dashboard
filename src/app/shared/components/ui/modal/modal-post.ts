import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PostService } from '../../../../core/services/post-service';
import { IPostInfo } from '../../../../models/postInfo-model';

@Component({
  selector: 'app-modal-post',
  standalone: false,
  templateUrl: './modal-post.html',
  styleUrl: './modal-post.scss',
})
export class ModalPost {
  postService = inject(PostService);
  @Output() closeBtn = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() post?: IPostInfo = this.post;
  editedText = '';

  onClose() {
    this.closeBtn.emit();
  }

  onUpdate() {
    const updatedPost = {
      ...this.post,
      text: this.editedText,
      updatedAt: new Date().toISOString(),
    };
    this.update.emit(updatedPost);
    this.onClose();
  }
}
