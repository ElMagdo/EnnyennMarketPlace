import { Component } from '@angular/core';

@Component({
  selector: 'quote',
  template: `
    <div class="box">
      <div class="cap">ENNYEN</div>
      <div class="lg-txt">
        A trade center where<br>businesses meet businesses for<br>a better and greener future.
      </div>
      <div class="lnk">
      <span class="u-txt">Read more about our mission</span><span>></span>
      </div>
    </div>
  `,
  styles: [`
  .box {
    background-color: #fefdef;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  .cap {
    color: #2660a3;
    font-weight: bold;
    font-size: 30px;
  }
  .lg-txt {
    font-size: 34px;
    font-weight: semi-bold;
    text-align: center;
    margin-bottom: 5px;
  }
  .lnk {
    color: #2660a3;
    font-size: 17px;
  }
  u-txt {
    text-decoration: underline;
  }
  `]
})
export class Quote {
  constructor() { }
}
