import { Component, inject } from '@angular/core';
import { CartItems } from "./cart-items/cart-items";
import { Cart as CartService } from '../../services/cartServices';


@Component({
  selector: 'app-cart',
  imports: [CartItems],
  template: `
   <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-items [item]="item"/>
      }
   </div>
  `,
  styles: ``,
})
export class Cart {
  cartService = inject(CartService);
}
