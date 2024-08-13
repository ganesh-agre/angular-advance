import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Product } from '../../../model/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>

        <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          formControlName="quantity"
        >
        </stock-counter>

        <button
          type="button"
          [disabled]="stockExists || notSelected"
          (click)="onAdd()"
        >
          Add stock
        </button>
      </div>
    </div>
  `,
})
export class StockSelectorComponent {
  @Input()
  parent!: FormGroup;
  @Input()
  products!: Product[];

  @Output() added: EventEmitter<any> = new EventEmitter();

  get notSelected() {
    return !(this.parent.get('selector') as FormGroup).value.id;
  }

  get stockExists() {
    console.log((this.parent.get('selector') as FormGroup).value.id);
    return (
      this.parent.hasError('stockExists') &&
      (this.parent.get('selector') as FormGroup).value.id
    );
  }

  onAdd() {
    this.added.emit((this.parent.get('selector') as FormGroup).value);
    this.parent.get('selector')?.reset({ id: '', quantity: 10 });
  }
}
