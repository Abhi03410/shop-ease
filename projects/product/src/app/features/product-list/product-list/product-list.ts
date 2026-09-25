import { Component, inject, OnInit } from '@angular/core';
import { ProductFacade } from '../../../facade/product-facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  private productFacade:ProductFacade = inject(ProductFacade);

  product$ = this.productFacade.product$;

  ngOnInit(): void {
    this.productFacade.loadProducts();
  }

  load():void{
    this.productFacade.loadProducts();
  }
}
