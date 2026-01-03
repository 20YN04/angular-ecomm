import { Injectable, signal } from '@angular/core';
import { products } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<products[]>([]);

  addToCart(products: products) {
    this.cart.set([...this.cart(), products]);
  }
}
