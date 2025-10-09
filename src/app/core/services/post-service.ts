import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IPost } from '../../models/post-model';
import { IPostInfo } from '../../models/postInfo-model';
import { concatMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  http = inject(HttpClient)
  url = 'http://localhost:3000/posts';
  
  posts = signal<IPostInfo[]>([])
  
  constructor() {
    this.loadPosts()
  }
  
  loadPosts() {
    return this.http.get<IPostInfo[]>(this.url).subscribe(posts => {
      this.posts.set(posts)
    })
  }
  
  addPost(postText: IPost) {
    return this.http.post<IPostInfo>(this.url, postText).subscribe(newPost => {
      this.posts.update(posts => [...posts, newPost])
      this.setPost(JSON.stringify(this.posts()))
    })
    
  }
  
  deletePost(id: number) {
    const isConfirmed = confirm('Вы уверены, что хотите удалить эту публикацию?');
    if (!isConfirmed) return;
    
    return this.http.delete(`${this.url}/${id}`).subscribe(() => {
      this.posts.update((posts) => posts.filter(post => post.id !== id))
    })
    
  }
  
  updatePost(updatingPost: Partial<IPostInfo>) {
    return this.http.put<IPostInfo>(`${this.url}/${updatingPost.id}`, updatingPost)
      .subscribe(() => {
        this.posts.update(posts =>
          posts.map(p =>
            p.id === updatingPost.id
              ? { ...p, ...updatingPost }
              : p
          )
        );
      });
  }
  
  setPost(post: string) {
    localStorage.setItem('posts', post)
  }
  
}
