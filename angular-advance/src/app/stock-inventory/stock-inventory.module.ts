import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './container/stock-inventory.component';
import { StockBranchComponent } from './container/components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './container/components/stock-products/stock-products.component';
import { StockSelectorComponent } from './container/components/stock-selector/stock-selector.component';
import { StockCounterComponent } from './container/components/stock-counter/stock-counter.component';
import { StockInventoryService } from './stock-inventory.service';
@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    StockCounterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StockInventoryComponent],
  providers: [StockInventoryService],
})
export class StockInventoryModule {}
