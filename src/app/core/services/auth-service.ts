import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginInfo } from '../../models/loginInfo-model';
import { map, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/userInfo-model';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  url = 'http://localhost:3000/users';

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  login(userInfo: ILoginInfo): Observable<IUser | null> {
    return this.getUser().pipe(
      map((users) => {
        const loginedUser = users.find(
          (user) => user.email === userInfo.email && user.fakePassword === userInfo.fakePassword,
        );
        this.setUser(JSON.stringify(loginedUser));
        if (loginedUser) {
          this.userService.loginedUser(loginedUser);
        }

        return loginedUser ? loginedUser : null;
      }),
    );
  }

  register(userInfo: IUser): Observable<IUser> {
    const fakeToken = Math.random().toString(36).substring(2);
    const newUser = {
      name: userInfo.name,
      email: userInfo.email,
      fakePassword: userInfo.fakePassword,
      token: fakeToken,
    };

    return this.getUser().pipe(
      map((users) => {
        const existingUser = users.find((u) => u.email === userInfo.email);
        if (existingUser) {
          throw new Error('Пользователь уже существует');
        }
        return newUser;
      }),
      switchMap((userToAdd) =>
        this.http.post<IUser>(this.url, userToAdd).pipe(
          tap((response) => {
            this.setUser(JSON.stringify(response));
            this.userService.loginedUser(response);
            if (response.token) {
              this.setToken(response.token);
            }
            this.router.navigate(['/dashboard']);
          }),
        ),
      ),
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: string): void {
    localStorage.setItem('user', user);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
