import { Component } from '@angular/core';
import { CardItm, ListItm } from 'src/app/models';

@Component({
  selector: 'main',
  template: `
    <div>
      <div>
        <div>
          <div>Gift4Me</div>
          <div>
            <span>icon</span>
            <input type="search" placeholder="Search for gifts">
            <span>arrow-></span>
          </div>
          <div>
            <div>Dashboard</div>
            <div>Orders</div>
            <div>Gifts</div>
            <div>Clients</div>
          </div>
          <div><span>icon</span><span>Recent</span></div>
        </div>
        <div>---line---</div>
        <div>
          <div><span>icon</span><span>Dashboard</span></div>
          <div>
            <div>Overview</div>
            <div>Gifts</div>
          </div>
          <div>Add Widget</div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <div>Best Selling Gift</div>
              <div>icon</div>
            </div>
            <div>
              <div>img</div>
              <div>
                <div><span>icon</span><span>12.5</span></div>
                <div><span>icon</span><span>3.54%</span></div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>Most Viewed Gift</div>
              <div>icon</div>
            </div>
            <div>
              <div>img</div>
              <div>
                <div><span>icon</span><span>200</span></div>
                <div><span>icon</span><span>1.04%</span></div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>Most Profitable Gifts</div>
              <div>icon</div>
            </div>
            <div *ngFor="let i of listItems1">
              <listitem [item]="i"></listitem>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>Most Profitable Categories</div>
              <div>icon</div>
            </div>
            <div *ngFor="let i of listItems2">
              <listitem [item]="i"></listitem>
            </div>
          </div>
          <div>
            <div>
              <div>Top Selling Gifts</div>
              <div>icon</div>
            </div>
            <div *ngFor="let i of cardItems1">
              <carditem [item]="i"></carditem>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>Most Viewed Gifts</div>
              <div>icon</div>
            </div>
            <div *ngFor="let i of cardItems2">
              <carditem [item]="i"></carditem>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>General Statistics</div>
            <div>icon</div>
          </div>
          <div>
            <div>3465</div>
            <div>Gifts on Sale</div>
          </div>
          <div>
            <div>100</div>
            <div>Sales this month</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Main {
  listItems1?: ListItm[];
  cardItems1?: CardItm[];
  listItems2?: ListItm[];
  cardItems2?: CardItm[];

  constructor() {
    this.listItems1 = [
      {
        "id": 1,
        "name": 'iPhone 13',
        "state": 'r',
        "amount": 56.78
      },
      {
        "id": 2,
        "name": 'Smart watch',
        "state": 'f',
        "amount": 43.92
      },
      {
        "id": 3,
        "name": 'Camcoder',
        "state": 's',
        "amount": 20.67
      },
      {
        "id": 4,
        "name": 'Smart Home',
        "state": 's',
        "amount": 12.40
      },
      {
        "id": 5,
        "name": 'Dinner set',
        "state": 's',
        "amount": 9.962
      }
    ];

    this.listItems2 = [
      {
        "id": 1,
        "name": 'Electronics',
        "state": 'r',
        "amount": 56.78
      },
      {
        "id": 2,
        "name": 'Fashion',
        "state": 'f',
        "amount": 43.92
      },
      {
        "id": 3,
        "name": 'Home & Decor',
        "state": 's',
        "amount": 20.67
      },
      {
        "id": 4,
        "name": 'Smart Speakers',
        "state": 's',
        "amount": 12.40
      },
      {
        "id": 5,
        "name": 'Kitchen',
        "state": 's',
        "amount": 9.962
      }
    ];

    this.cardItems1 = [
      {
        "imageUrl": 'url',
        "name": 'Earpods',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Smart watch',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Smart home',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Eye glasses',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Home towels',
        "amount": 56.78
      }
    ];

    this.cardItems1 = [
      {
        "imageUrl": 'url',
        "name": 'Earpods',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Smart watch',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Baby shoes',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Laptop',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Pink shirt',
        "amount": 56.78
      },
      {
        "imageUrl": 'url',
        "name": 'Eye glasses',
        "amount": 56.78
      }
    ];
  }
}
