import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <shopbanner></shopbanner>
    <navbar></navbar>
    <hero></hero>
  `,
})
export class Header {
  constructor() { }
}
