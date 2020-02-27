import { Component } from '@angular/core';

@Component({
  selector: 'basic-rating',
  template: './basic.html'
})
export class BasicRatingComponent {
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
}
