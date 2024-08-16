import { Component } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OperatorSubscriber } from 'rxjs/internal/operators/OperatorSubscriber';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>
    <mail-item *ngFor="let message of messages | async" [message]="message">
    </mail-item>
  `,
})
export class MailFolderComponent {
  messages!: Observable<Mail[]>;
  constructor(private router: ActivatedRoute) {
    this.messages = this.router.data.pipe(map((data) => data['messages']));
  }
}
