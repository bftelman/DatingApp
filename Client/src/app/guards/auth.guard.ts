import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const accountService: AccountService = inject(AccountService);
  const toastrService: ToastrService = inject(ToastrService);

  return accountService.user$.pipe(
    map(user => {
      if (user) return true;
      else {
        toastrService.error('You shall not pass');
        return false;
      }
    })
  )
};
