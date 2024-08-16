import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthFormModule } from './auth-form/auth-form.module';
import { MailModule } from './mail/mail.module';
import { AppComponent } from './app.component';
import { MyForComponent } from './strucrural-directive/my-for.comonent';
import { FileSizeComponent } from './pipe/file-size.comonent';

import { CreditCardModule } from './credit-card/credit-card.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule,
    CreditCardModule,
    StockInventoryModule,
    MailModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
