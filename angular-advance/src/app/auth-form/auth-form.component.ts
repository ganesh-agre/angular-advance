import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  ViewChild,
  AfterViewInit,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
  ViewChildren,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';
import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="button"></ng-content>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          [style.display]="showMessage ? 'inherit' : 'none'"
        ></auth-message>
        <auth-message
          [style.display]="showMessage ? 'inherit' : 'none'"
        ></auth-message>
        <auth-message
          [style.display]="showMessage ? 'inherit' : 'none'"
        ></auth-message>
      </form>
    </div>
  `,
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage!: boolean;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent)
  remember!: QueryList<AuthRememberComponent>;

  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;
  @ViewChild('email') email!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 70;
      });
      this.cdr.detectChanges();
    }

    //  this.email.nativeElement.setAttribute('placeholder', 'please Enter Email');
    //   this.email.nativeElement.classList.add('email');
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter Your Email'
    );

    this.renderer.addClass(this.email.nativeElement, 'email');
    this.email.nativeElement.focus();
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
