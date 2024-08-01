import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { MyForComponent } from './strucrural-directive/my-for.comonent';
import { FileSizeComponent } from './pipe/file-size.comonent';

import { CreditCardModule } from './credit-card/credit-card.module';
import { MyForDirective } from './strucrural-directive/my-for.directive';
import { FileSizePipe } from './pipe/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyForComponent,
    FileSizeComponent,
    MyForDirective,
    FileSizePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthFormModule, CreditCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
