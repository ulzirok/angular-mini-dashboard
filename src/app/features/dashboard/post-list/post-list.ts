import { Component, inject } from '@angular/core';
import { PostService } from '../../../core/services/post-service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList {
  postService = inject(PostService);
  
  
}
