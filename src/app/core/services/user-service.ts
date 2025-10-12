import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../../models/userInfo-model';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  http = inject(HttpClient)
  url: string = 'http://localhost:3000/users';
  user = signal<IUser | null>(null)
  router = inject(Router)
  
  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user.set(JSON.parse(savedUser))
    }
  }
  
  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
  }
  
  loginedUser(loginedUser: IUser) {
    this.user.set(loginedUser)
  }
  
  updateProfile(user: IUser): Observable<IUser> {
    const currentUser = this.user()
    console.log(currentUser);
    
    if (!currentUser) {
      throw new Error('User not found');
    }
    
    const updatedUser = { ...currentUser!, name: user.name, email: user.email, about: user.about, photo: user.photo }
    console.log(updatedUser);
    
    
    
    return this.http.put<IUser>(`${this.url}/${currentUser.id}`, updatedUser).pipe(
      tap((response) => {
        this.user.set(response)
        localStorage.setItem('user', JSON.stringify(response));
      
        console.log(response);
      })
    )
  }
}
