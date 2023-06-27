import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../models/member';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url: string = environment.apiUrl;
  http = inject(HttpClient);

  getMembers() {
    return this.http.get<Member[]>(this.url + "/users")
  }

  getMember(username: string) {
    return this.http.get<Member>(this.url + "/users/" + username);
  }
}
