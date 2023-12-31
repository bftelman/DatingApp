import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUser } from 'src/app/models/loginUser';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService ) {}

  ngOnInit(): void {
  }

  loginUser: LoginUser = {username: "", password: ""};

  login() {
    this.accountService.login(this.loginUser).subscribe({
      next: () => this.router.navigateByUrl("/members"),
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
