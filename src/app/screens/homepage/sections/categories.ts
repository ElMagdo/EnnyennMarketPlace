import { Component } from '@angular/core';

@Component({
  selector: 'categories',
  template: `
    <div>
      <div class="top">
        <div class="txt">Discover, Delight, Repeat.</div>
        <div class="cap">Browse ENNYEN's<br>captivating categories</div>
        <div class="hr"><hr/></div>
      </div>
      <div class="btm">
        <div class="cat">
          <div><img src="../../assets/homepage/cat1.png" alt="cat-1"/></div>
          <div>Solar inverters</div>
        </div>
        <div class="cat">
          <div><img src="../../assets/homepage/cat2.png" alt="cat-2"/></div>
          <div>Solar panels</div>
        </div>
        <div class="cat">
          <div><img src="../../assets/homepage/cat3.png" alt="cat-3"/></div>
          <div>Batteries</div>
        </div>
        <div class="cat">
          <div><img src="../../assets/homepage/cat4.png" alt="cat-4"/></div>
          <div>Charge<br>controllers</div>
        </div>
        <div class="cat">
          <div><img src="../../assets/homepage/cat5.png" alt="cat-5"/></div>
          <div>Generators</div>
        </div>
        <div class="cat">
          <div><img src="../../assets/homepage/cat6.png" alt="cat-6"/></div>
          <div>Accessories</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .top {
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
    margin: 15px 0;
  }
  hr {
    height: 2px;
    background-color: #bdbdbd;
  }
  .btm {
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cat {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: semi-bold;
    background-color: #ffffff;
    margin: 50px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  `]
})
export class Categories {
  constructor() { }
}
