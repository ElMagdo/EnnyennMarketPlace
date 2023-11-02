import { Component } from '@angular/core';

@Component({
  selector: 'newsletter',
  template: `
    <div>
      <div>
        <div>Growth begins here</div>
        <div>
          Break Free from Financial Limitations,
          Unleash Business and Personal
          Potential
        </div>
        <div>
          <input type="text" placeholder="your@email.com">
        </div>
        <div>Keep me posted</div>
      </div>
    </div>
  `,
})
export class NewLetter {
  constructor() {}
}
