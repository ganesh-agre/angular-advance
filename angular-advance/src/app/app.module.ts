import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthFormModule } from './auth-form/auth-form.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
