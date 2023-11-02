import { Component } from '@angular/core';
import { ShopBanner } from '../components/shopBanner';

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
