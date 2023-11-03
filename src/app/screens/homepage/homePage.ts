import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  template: `
    <div>
      <header></header>
      <quote></quote>
      <trynow></trynow>
      <categories></categories>
      <factories></factories>
    </div>
  `,
})
export class HomePage {
  constructor() { }
}
