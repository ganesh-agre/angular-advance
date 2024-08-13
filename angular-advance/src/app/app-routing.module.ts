import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { MyForComponent } from './strucrural-directive/my-for.comonent';
import { FileSizeComponent } from './pipe/file-size.comonent';
import { StockInventoryComponent } from './stock-inventory/container/stock-inventory.component';

const routes: Routes = [
  { path: '', component: AuthFormComponent, pathMatch: 'full' },
  {
    path: 'structural-directive',
    component: MyForComponent,
  },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'file-size', component: FileSizeComponent },
  { path: 'stock-inventory', component: StockInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
