import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MailFolderComponent } from './mail-folder.component';

@Injectable()
export class MailFolderGuard implements CanDeactivate<MailFolderComponent> {
  canDeactivate(component: MailFolderComponent): boolean {
    return false;
  }
}
