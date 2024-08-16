import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  user = { isAdmin: true };
  checkPermission() {
    return this.user.isAdmin;
  }

  isLoggedIn() {
    return true;
  }
}
