import { Component, inject } from '@angular/core';
import { PostService } from '../../../core/services/post-service';
import { IPost } from '../../../models/post-model';
import { IPostInfo } from '../../../models/postInfo-model';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrls: ['./post.scss']
})
export class Post {
  postService = inject(PostService)
  
  deletePost(id: number) {
    this.postService.deletePost(id)
  }
  
  updatePost(post: IPostInfo) {
    this.postService.updatePost(post)
  }
  
  isEditModalOpen: boolean = false;
  openModal() {

    this.isEditModalOpen = true;
    // document.body.classList.add('lock');
  }

  closeModal() {
    this.isEditModalOpen = false;
    // document.body.classList.remove('lock');
  }
}
