import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Product, Item } from '../model/product.interface';
import { StockInventoryService } from '../stock-inventory.service';
import { forkJoin, map } from 'rxjs';
import { StockValidators } from '../stock-invetory.validator';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.comonent.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"> </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="onAdded($event)"
        >
        </stock-selector>

        <stock-products
          [parent]="form"
          [map]="productMap"
          (remove)="onRemove($event)"
        >
        </stock-products>
        <div>Total:{{ total | currency : 'USD' : true }}</div>
        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>
        <div></div>
        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `,
})
export class StockInventoryComponent implements OnInit {
  products!: Product[];
  productMap!: Map<number, Product>;
  total!: number;
  form;
  constructor(
    private fb: FormBuilder,
    private stockInventoryService: StockInventoryService
  ) {
    this.form = this.fb.group(
      {
        store: this.fb.group({
          branch: this.fb.control('', [
            Validators.required,
            StockValidators.checkBranch,
          ]),
          code: this.fb.control('', Validators.required),
        }),
        selector: this.createStock(),
        stock: this.fb.array([
          this.createStock({ id: 1, quantity: 10 }),
          this.createStock({ id: 2, quantity: 20 }),
        ]),
      },
      { validator: StockValidators.checkStockExists }
    );
  }

  ngOnInit(): void {
    const cart = this.stockInventoryService.getCartItems();
    const products = this.stockInventoryService.getProducts();

    forkJoin([cart, products]).subscribe(([cart, products]) => {
      const myMap = products.map<[number, Product]>((product) => [
        product.id,
        product,
      ]);
      this.productMap = new Map<number, Product>(myMap);
      this.products = products;
      cart.forEach((cart) => this.onAdded(cart));
      const stockValue = this.form.get('stock')?.value;
      this.CalculateTotal(stockValue as Item[]);
      this.form
        .get('stock')
        ?.valueChanges.subscribe((values) =>
          this.CalculateTotal(values as Item[])
        );
    });
  }

  CalculateTotal(values: Item[]) {
    this.total = values.reduce((prev, next) => {
      const product = this.productMap.get(next.id);
      return prev + (product?.price || 0) * next.quantity;
    }, 0);
  }

  createStock(stock?: any) {
    return this.fb.group({
      id: this.fb.control(parseInt(stock?.id) || ''),
      quantity: this.fb.control(stock?.quantity || 10),
    });
  }

  onAdded(stock: any) {
    let controls = this.form.get('stock') as FormArray;
    controls.push(this.createStock(stock));
    console.log(controls);
  }

  onRemove({ group, index }: { group: FormGroup; index: number }) {
    (this.form.get('stock') as FormArray).removeAt(index);
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
