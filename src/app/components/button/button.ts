import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black  w-full border px-5 py-2 rounded-xl shadow-md hover:bg-gray-200"(click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``,
})
export class Button {
  label = input('');
  btnClicked = output();

  
}
