import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <body class="homeBody">
      <app-home-header></app-home-header>
      <main class="homeMain">
        <app-home-promo-card></app-home-promo-card>
      </main>
      <footer></footer>
    </body>
  `,
  styles: [
    '.homeBody {width: 100%; background: url("../../assets/images/home/background/bg.jpg") center no-repeat; background-size: cover;}',
    '.homeMain {min-height: 95vh}',
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
