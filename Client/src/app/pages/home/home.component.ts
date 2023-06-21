import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private http: HttpClient) {}
  users: any;

  registerMode: boolean = false;

  ngOnInit(): void {
    this.getUsers();
  }

  toggleRegister() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: (response) => this.users = response,
      error: (error) => console.log(error)
    })
  }

  handleCancel(event: boolean) {
    this.registerMode = event;
  }
}
