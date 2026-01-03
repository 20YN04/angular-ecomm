import { Component, inject, input } from '@angular/core';
import { products } from '../../../models/product.models';
import { Button } from "../../../components/button/button";
import { Cart } from '../../../services/cartServices';

@Component({
  selector: 'app-cart-items',
  imports: [Button],
  template: `
    <div class="bg-white shadow-md border-shadow rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().image" class="w-12.5 h-12.5" object-obtain>
      <div>
        <span class="text-md font-bold">
          {{ item().title }}
        </span>
        <span class="text-sm">
          {{ '€' + item().price}}
        </span>
      </div>
      <div class="flex-1"></div>
      <app-button [label]="'Remove from cart'" (btnClicked)="cartService.removeFromCart(item().id)"/>
    </div>
  `,
  styles: ``,
})
export class CartItems {
  
  cartService = inject(Cart);

  item = input.required<products>();
}
