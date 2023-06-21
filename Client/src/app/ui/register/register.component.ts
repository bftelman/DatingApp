import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  registerUser: any = {}
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    
  }

  register() {
    this.accountService.register(this.registerUser).subscribe({
      next: () => this.cancel(),
      error: error => console.log(error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
