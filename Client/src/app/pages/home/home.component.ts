import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

  registerMode: boolean = false;

  toggleRegister() {
    this.registerMode = !this.registerMode;
  }

  handleCancel(event: boolean) {
    this.registerMode = event;
  }
}
