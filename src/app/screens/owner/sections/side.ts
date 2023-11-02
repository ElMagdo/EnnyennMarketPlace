import { Component } from '@angular/core';

@Component({
  selector: 'side',
  template: `
    <div>
      <div>
        <div>Total Sales</div>
        <div>{{ 200.46 | currency:'USD' }}</div>
        <div>---line---</div>
        <div>
          <div>6 Orders</div>
          <div>View report</div>
        </div>
      </div>
      <div>
        <div>Total Sessions</div>
        <div>476</div>
        <div>---line---</div>
        <div>
          <div>4 Visitors</div>
          <div>See Live View</div>
        </div>
      </div>
      <div>
        <div>Customer Rate</div>
        <div>5.43%</div>
        <div>---line---</div>
        <div>
          <div>10 First Time</div>
          <div>4 Returning</div>
        </div>
      </div>
      <div>
        <div><span>Orders</span><span>Actions</span></div>
        <div>
          <div>
            <div>10:30</div>
            <div>
              New product added
              &lt;&lt;iPhone XS&gt;&gt;
            </div>
          </div>
          <div>
            <div>10:20</div>
            <div>
              New product added
              &lt;&lt;iPhone XS&gt;&gt;
            </div>
          </div>
          <div>
            <div>10:10</div>
            <div>
              New product added
              &lt;&lt;iPhone XS&gt;&gt;
            </div>
          </div>
          <div>
            <div>09:00</div>
            <div>
              New product added
              &lt;&lt;iPhone XS&gt;&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Side {
  constructor() { }
}
