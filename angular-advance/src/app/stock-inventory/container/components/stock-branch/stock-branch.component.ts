import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `<div class="stock-inventory">
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input type="text" placeHolder="Branch ID" formControlName="branch" />
        <div class="error" *ngIf="required('branch')">
          Branch name is require
        </div>
        <div class="error" *ngIf="invalid()">Branch name is not valid</div>
        <input type="text" placeHolder="Manager Code" formControlName="code" />
        <div class="error" *ngIf="required('code')">
          Brnach code is require.
        </div>
      </div>
    </div>
  </div>`,
})
export class StockBranchComponent {
  @Input() parent!: FormGroup;

  required(name: string) {
    return (
      this.parent.get(`store.${name}`)?.hasError('required') &&
      this.parent.get(`store.${name}`)?.touched
    );
  }

  invalid() {
    return (
      this.parent.get('store.branch')?.hasError('invalidBranch') &&
      this.parent.get('store.branch')?.dirty &&
      !this.required('branch')
    );
  }
}
