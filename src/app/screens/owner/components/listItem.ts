import { Component, Input } from '@angular/core';
import { ListItm } from 'src/app/models';

@Component({
  selector: 'listitem',
  template: `
    <div>
      <div [ngSwitch]="item?.id">
        <span *ngSwitchCase="1">{{item?.id}}</span>
        <span *ngSwitchCase="2">{{item?.id}}</span>
        <span *ngSwitchCase="3">{{item?.id}}</span>
        <span *ngSwitchDefault>{{item?.id}}</span>
        <span>{{item?.name}}</span>
      </div>
      <div>
        <span>
          <img *ngIf="item?.state == 'r'" src="" alt="green up-arrow">
          <img *ngIf="item?.state == 'f'" src="" alt="red up-arrow">
        </span>
        <amount [value]="item?.amount"></amount>
      </div>
    </div>
  `,
})
export class ListItem {
  @Input() item?: ListItm
  constructor() {}
}
