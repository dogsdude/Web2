import { Component } from '@angular/core';

@Component({
  selector: 'basic-rating',
  templateUrl: './basic.html'
})
export class BasicComponent {
  max: number = 5;
  isReadonly: boolean = true;
  overStar: number | undefined;
  percent: number;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }
}
