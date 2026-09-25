import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  private http: HttpClient = inject(HttpClient);

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('/products.json');
  } 
}
