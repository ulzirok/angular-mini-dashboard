import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../../models/userInfo-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  http = inject(HttpClient)
  url: string = 'http://localhost:3000/users';
  user = signal<IUser | null>(null)
  
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
}
