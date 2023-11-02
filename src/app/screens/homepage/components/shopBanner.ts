import { Component } from '@angular/core';

@Component({
  selector: 'shopbanner',
  template: `
    <div class="box">
    <div class="rnd">
    <div>img1</div>
    <div class="txt">UNBEATABLE PRICES AT SOLAR SHOP!</div>
    <div>img2</div>
    </div>
    <div>X</div>
    </div>
  `,
  styles: [`
  .box {
    background-color: #fffff;
    padding: 5px 25px;
  }
  .rnd {
    border-radius: 50px;
    border: 2px #f7eb60 solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
  }
  .txt {
    color: #73b95b;
    font-weight: bold;
    font-size: 15px;
  }
  `]
})
export class ShopBanner {
  constructor() { }
}
