import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <div>
    <div>
    <div>logo</div>
    <div>searcbar</div>
    <div>buttons</div>
    </div>
    <div>left links</div>
    <div>right links</div>
    </div>
  `,
})
export class NavBar {
  constructor() { }
}
