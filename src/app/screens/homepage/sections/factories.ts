import { Component } from '@angular/core';

@Component({
  selector: 'factories',
  template: `
    <div class="box">
      <div class="txt">Discover, Delight, Repeat.</div>
      <div class="cap">Source Solar Directly<br>from Factories</div>
      <div class="cnt">
        <div class="lft">
        <div><img src="../../assets/homepage/fac1.png" alt="fac-1"/></div>
          <div class="btm qb">
            <div class="tt">Qqan Solar<br>Manufacturers Co. LTD</div>
            <div class="btx">
              <span class="geo"><img src="../../assets/homepage/geo-alt.png" alt="geo-alt"/></span> 
              &nbsp;Guangzhou, China
            </div>
            <div class="tx">Take a tour <span class="chv"><img src="../../assets/homepage/chevron-right.png" alt="chevron-right"/></span></div>
          </div>
        </div>
        <div class="ryt">
        <div class="s">
          <div><img src="../../assets/homepage/fac2.png" alt="fac-2"/></div>
          <div class="btm sb">
            <div class="tt">Shushan & Co. LTD</div>
            <div class="btx">
              <span class="geo"><img src="../../assets/homepage/geo-alt.png" alt="geo-alt"/></span>
              &nbsp;Frankfurt, Germany
            </div>
            <div class="tx">Take a tour <span class="chv"><img src="../../assets/homepage/chevron-right.png" alt="chevron-right"/></span></div>
          </div>
        </div>
        <div class="b">
          <div><img src="../../assets/homepage/fac3.png" alt="fac-3"/></div>
          <div class="btm bb">
            <div class="tt">BWW Solar Suppliers GmBH</div>
            <div class="btx">
              <span class="geo"><img src="../../assets/homepage/geo-alt.png" alt="geo-alt"/></span> 
              &nbsp;Frankfurt, Germany
            </div>
            <div class="tx">Take a tour <span class="chv"><img src="../../assets/homepage/chevron-right.png" alt="chevron-right"/></span></div>
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
    margin-bottom: 30px;
  }
  .cnt {
    display: flex;
    color: #ffffff;
  }
  .lft {
    margin-right: 25px;
  }
  .lft, .s, .b {
    position: relative;
  }
  .s {
    margin-bottom: 20px;
  }
  .qb, .sb, .bb {
    position: absolute;
    bottom: 0;
    padding: 20px 30px;
    background-color: #00000080;
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
  .tt {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .btx {
    font-size: 13px;
    font-weight: semi-bold;
    margin-bottom: 25px;
  }
  .tx {
    font-size: 13px;
  }
  .btx, .tx {
    display: flex;
    align-items: center;
  }
  `]
})
export class Factories {
  constructor() {}
}
