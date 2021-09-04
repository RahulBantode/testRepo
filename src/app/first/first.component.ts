import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  <div class= 'abc'>
    <h2>
      Inside the First componenent Route
    </h2>
  </div>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
