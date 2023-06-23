import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  registerUser: any = {}
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  register() {
    this.accountService.register(this.registerUser).subscribe({
      next: () => this.cancel(),
      error: error => this.toastr.error(error.error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
