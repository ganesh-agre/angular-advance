import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="button"></ng-content>
        <ng-content select="auth-remember"></ng-content>
        <div *ngIf="showMessage">Keep me logged in for 10 days.</div>
      </form>
    </div>
  `,
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent implements AfterContentInit {
  showMessage!: boolean;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent)
  remember!: QueryList<AuthRememberComponent>;

  ngAfterContentInit(): void {
    if (this.remember) {
      console.log(this.remember);
      this.remember.forEach((item) =>
        item.checked.subscribe((checked) => {
          this.showMessage = checked;
        })
      );
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
