import { Injectable, signal } from '@angular/core';
import { products } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<products[]>([
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      "stock": 10,
    },
    {
      "id":2,
      "title":"Mens Casual Premium Slim Fit T-Shirts ",
      "price":22.3,
      "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      "stock":0,
    },
    {
      "id":3,
      "title":"Mens Cotton Jacket",
      "price":55.99,
      "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      "stock":5,
    },
    {
      "id":4,
      "title":"Mens Casual Slim Fit",
      "price":15.99,
      "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      "stock":2,
    },
  ]);

  addToCart(products: products) {
    this.cart.set([...this.cart(), products]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }
}
