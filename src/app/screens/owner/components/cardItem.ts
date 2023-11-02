import { Component, Input } from '@angular/core';
import { CardItm } from 'src/app/models';

@Component({
  selector: 'carditem',
  template: `
    <div>
      <div>
        <span><img src="{{item?.imageUrl}}" alt="{{item?.name}}"></span>
        <span>{{item?.name}}</span>
      </div>
      <div><amount [value]="item?.amount"></amount></div>
    </div>
  `,
})
export class CardItem {
  @Input() item?: CardItm
  constructor() {}
}
