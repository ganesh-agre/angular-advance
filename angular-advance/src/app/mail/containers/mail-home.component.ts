import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['mail-home.component.scss'],
  template: `
    <div class="app__content">
      <nav>
        <a
          [routerLink]="[{ outlets: { primary: ['folder', 'inbox'] } }]"
          routerLinkActive="active"
        >
          Inbox
        </a>
        <a
          [routerLink]="[{ outlets: { primary: ['folder', 'trash'] } }]"
          routerLinkActive="active"
        >
          Trash
        </a>
      </nav>
      <mail-app></mail-app>
    </div>
  `,
})
export class MailHomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log(event);
      });
  }
}
