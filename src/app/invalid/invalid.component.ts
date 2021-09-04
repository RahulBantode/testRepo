import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid',
  template: `
    <h2>
      Sorry, url is not found , Invalid url....!!!!
    </h2>
  `,
  styles: [
  ]
})
export class InvalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
