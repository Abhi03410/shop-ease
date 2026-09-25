import { inject, Injectable } from '@angular/core';
import { ProductApi } from '../core/http/product-api';
import { ProductState } from '../state/product-state';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {

  // Inject to the product Api and State
  private api: ProductApi = inject(ProductApi);
  private state: ProductState = inject(ProductState);

  // Expose state directly to Component

  product$ = this.state.product$;

  // Business logic method

  loadProducts(): void {
    this.api.getProduct().subscribe({
      next: (data) => this.state.setProducts(data),
      error: (err) => console.error('Error fetching products', err),
      complete: () => console.log('Products loaded successfully')
    })
  }
}
