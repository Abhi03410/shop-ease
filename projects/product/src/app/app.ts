import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ProductList } from './features/product-list/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
