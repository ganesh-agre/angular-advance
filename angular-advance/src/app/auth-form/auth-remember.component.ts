import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event)" />
      Keep me logged in
    </label>
  `,
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(event: Event) {
    this.checked.emit((event.target as HTMLInputElement).checked);
  }
}
