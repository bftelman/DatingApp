import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../models/member';
import { User } from '../models/user';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] = [];
  url: string = environment.apiUrl;
  http = inject(HttpClient);

  getMembers() {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.url + "/users").pipe(
      map(members => {
        this.members = members;
        return members;
      })
    )
  }

  getMember(username: string) {
    const member = this.members.find(x => x.userName === username);
    if(member) return of(member);
    return this.http.get<Member>(this.url + "/users/" + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.url + "/users", member);
  }
}
