import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/loginUser';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  loginUser: LoginUser = {username: "", password: ""};

  login() {
    this.accountService.login(this.loginUser).subscribe({
      error: (error) =>  console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
