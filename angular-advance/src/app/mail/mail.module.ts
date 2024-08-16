import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailHomeComponent } from './containers/mail-home.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';

import { MailService } from './mail.service';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderGuard } from './containers/mail-folder/mail-folder.guard';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'folder/inbox', pathMatch: 'full' },
      {
        canDeactivate: [MailFolderGuard],
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve,
        },
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, AuthModule, RouterModule.forChild(ROUTES)],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailHomeComponent,
    MailViewComponent,
  ],
  providers: [MailService, MailFolderResolve, MailFolderGuard],
  exports: [],
})
export class MailModule {}
