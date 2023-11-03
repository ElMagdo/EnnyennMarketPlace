import { Component } from '@angular/core';

@Component({
  selector: 'trynow',
  template: `
    <div class="box">
      <div class="cnt">
      <div class="s-cnt">
        <div class="cap">Reduce electricity<br>bills with genuine<br>solar solutions</div>
        <div class="txt">
          Get all in one place for your solar/green energy<br>
          installation, products, and services by connecting with the<br>
          right providers locally and internationally from<br>
          one dashboard of proposals to make a choice from.
        </div>
        <div class="try">Try now</div>
      </div>
      <div><img src="../../assets/homepage/tryNow1.png" alt="tryNow1"/></div>
      </div>
      <div class="cnt">
      <div><img src="../../assets/homepage/tryNow2.png" alt="tryNow2"/></div>
      <div class="s-cnt">
        <div class="cap">Meet your customers<br>and partners right here.</div>
        <div class="txt">
        Marketplace where you can meet the buyers/clients of your solar<br>
        energy products and services. Advertise factories & manufacturing<br>
        companies and close deals Now.
        </div>
        <div class="try">Try now</div>
      </div>
      </div>
    </div>
  `,
  styles: [`
  .cnt {
    margin: 50px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .s-cnt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto 12px;
  }
  .cap {
    font-size: 30px;
    font-weight: semi-bold;
    margin-bottom: 20px;
  }
  .txt {
    font-size: 13px;
    margin-bottom: 20px;
  }
  .try {
    background-color: #2660a3;
    width: 100px;
    padding: 7px;
    color: #ffffff;
    text-align: center;
    border-radius: 3px;
    font-size: 13px;
  }
  `]
})
export class TryNow {
  constructor() { }
}
