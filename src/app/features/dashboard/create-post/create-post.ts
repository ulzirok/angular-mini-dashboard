import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post-service';

@Component({
  selector: 'app-create-post',
  standalone: false,
  templateUrl: './create-post.html',
  styleUrl: './create-post.scss',
})
export class CreatePost implements OnInit {
  createPostForm!: FormGroup;

  postService = inject(PostService);
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.createPostForm = this.fb.group({
      text: ['', Validators.required],
    });
  }

  submitPost() {
    this.postService.addPost(this.createPostForm.value);
    this.createPostForm.reset();
  }
}
