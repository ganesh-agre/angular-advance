import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
        name="primary"
      ></router-outlet>
    </div>

    <div class="mail">
      <router-outlet name="pane"></router-outlet>
    </div>
  `,
})
export class MailAppComponent {
  onActivate(event: RouterEvent) {
    console.log(event);
  }

  onDeactivate(event: RouterEvent) {}
}
