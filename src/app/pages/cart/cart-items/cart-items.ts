import { Component, input } from '@angular/core';
import { products } from '../../../models/product.models';

@Component({
  selector: 'app-cart-items',
  imports: [],
  template: `
    <p>
      cart-items works!
    </p>
  `,
  styles: ``,
})
export class CartItems {
  item = input.required<products>();
}
