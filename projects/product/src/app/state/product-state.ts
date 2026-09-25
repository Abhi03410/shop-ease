import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductState {
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  product$ = this.productSubject.asObservable();


  setProducts(products: Product[]): void {
    this.productSubject.next(products);
  }
}
