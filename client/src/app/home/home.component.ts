import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <app-home-header></app-home-header>
    <main></main>
    <footer></footer>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
