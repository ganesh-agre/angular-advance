import { NgModule } from '@angular/core';
import {
  PreloadingStrategy,
  Route,
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { MyForComponent } from './strucrural-directive/my-for.comonent';
import { FileSizeComponent } from './pipe/file-size.comonent';
import { StockInventoryComponent } from './stock-inventory/container/stock-inventory.component';
import { Observable, of } from 'rxjs';

export class CustomLoad implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null);
  }
}

const routes: Routes = [
  { path: '', component: AuthFormComponent, pathMatch: 'full' },
  {
    path: 'structural-directive',
    component: MyForComponent,
  },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'file-size', component: FileSizeComponent },
  { path: 'stock-inventory', component: StockInventoryComponent },

  {
    path: 'dashboard',
    data: { preload: true },
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomLoad })],
  exports: [RouterModule],
  providers: [CustomLoad],
})
export class AppRoutingModule {}
