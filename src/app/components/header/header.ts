import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { Cart } from '../../services/cartServices';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My store</span>
      <app-primary-button [label]="'Cart (' + CartService.cart().length + ')'"/>
    </div>

  `,
  styles: `
  `,
})
export class Header {
  CartService = inject(Cart);
  }



