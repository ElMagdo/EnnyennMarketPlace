import { Component } from '@angular/core';

@Component({
  selector: 'factories',
  template: `
    <div class="box">
      <div class="txt">Discover, Delight, Repeat.</div>
      <div class="cap">Source Solar Directly<br>from Factories</div>
      <div class="cnt">
        <div class="lft">
          <div class="qb">
            <div class="tt">Qqan Solar<br>Manufacturers Co. LTD</div>
            <div class="btx"><span>icon</span> Guangzhou, China</div>
            <div class="tx">Take a tour <span>icon</span></div>
          </div>
        </div>
        <div class="ryt">
        <div class="s">
          <div class="sb">
            <div class="tt">Shushan & Co. LTD</div>
            <div class="btx"><span>icon</span> Frankfurt, Germany</div>
            <div class="tx">Take a tour <span>icon</span></div>
          </div>
        </div>
        <div class="b">
          <div class="bb">
            <div class="tt">BWW Solar Suppliers GmBH</div>
            <div class="btx"><span>icon</span> Frankfurt, Germany</div>
            <div class="tx">Take a tour <span>icon</span></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .box {
    background-color: #ffffff;
    margin: 50px 150px;
  }
  .txt {
    font-size: 15px;
    font-weight: semi-bold;
  }
  .cap {
    font-size: 34px;
    font-weight: bold;
    color: #3f6632;
    margin-bottom: 15px;
  }
  .cnt {
    display: flex;
    color: #ffffff;
  }
  .lft {
    background-image: url("src/assets/homepage/fac1.png");
    background-color: #ededed;
  }
  .tt {
    font-size: 20px;
    font-weight: bold;
  }
  .btx {
    font-size: 13px;
    font-weight: semi-bold;
  }
  .tx {
    font-size: 13px;
  }
  `]
})
export class Factories {
  constructor() {}
}
