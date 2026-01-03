import { Component, inject, input } from '@angular/core';
import { products } from '../../../models/product.models';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { Cart } from '../../../services/cartServices';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md border-shadow rounded-xl p-6 flex flex-col relative">

      <div class="mx-auto">
        <img [src]="product().image" class="w-50 h-25 object-contain"/>
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{product().title}}</span>
          <span class="text-sm">{{'€' + product().price}}</span>
          <app-primary-button label='Add to Cart' class="mt-3" (btnClicked)="CartService.addToCart(product())"/>
        </div>
        <span class="absolute top-2 right-3 text-sm font-bold" [class]="product().stock ? 'text-green-500' : 'text-red-500'">
          @if (product().stock) {
            {{product().stock}} left
          }@else {
            out of stock
          }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {

  CartService = inject(Cart);
  product = input.required<products>();
}
