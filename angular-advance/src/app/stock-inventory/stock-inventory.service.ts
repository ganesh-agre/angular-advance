import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item, Product } from './model/product.interface';
@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get('http://localhost:3000/cart')
      .pipe(map((response: any) => response));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('http://localhost:3000/products')
      .pipe(map((response: any) => response));
  }
}
