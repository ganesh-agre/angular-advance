import { NgModule } from '@angular/core';
import { CreditCardDirective } from './credit-card.directive';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
  declarations: [CreditCardComponent, CreditCardDirective],
  imports: [],
  exports: [CreditCardDirective],
})
export class CreditCardModule {}
