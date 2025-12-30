import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();



  handleButtonClick() {
    console.log('buttion clicked');
  }
}
