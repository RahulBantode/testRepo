import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h2>
  Inside the Second componenent Route
</h2>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
