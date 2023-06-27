import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url: string = environment.apiUrl;
  user$$ = new BehaviorSubject<User | null>(null);
  user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) { }

  login(user: LoginUser) {
    return this.http.post<User>(this.url + "/account/login", user).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.user$$.next(user);
        }
      })
    )
  }

  register(user: LoginUser) {
    return this.http.post<User>(this.url + '/account/register', user).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.user$$.next(user);
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('user')
    this.user$$.next(null);
  }
}
