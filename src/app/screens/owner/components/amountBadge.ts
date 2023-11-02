import { Component, Input } from '@angular/core';

@Component({
  selector: 'amount',
  template: `
    <div>{{ value | currency:'USD' }}</div>
  `,
})
export class AmountBadge {
  @Input() value?: number;
  constructor() {}
}
