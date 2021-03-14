import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button tabindex=-1 *ngIf="!value">{{ value }}</button>
    <button tabindex=-1 class="x" *ngIf="value === 'X'">{{ value }}</button>
    <button tabindex=-1 class="o" *ngIf="value === 'O'">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
