import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-home',
  template: `
    <body class="authBody">
      <app-auth-home-header></app-auth-home-header>
      <main>
        <section>
          <article>
            <app-auth-home-first-card></app-auth-home-first-card>
          </article>
          <article>
            <app-auth-home-second-card></app-auth-home-second-card>
          </article>
          <article>
            <app-auth-home-third-card></app-auth-home-third-card>
          </article>
          <article>
            <app-auth-home-fourth-card></app-auth-home-fourth-card>
          </article>
          <article>
            <app-auth-home-fifth-card></app-auth-home-fifth-card>
          </article>
          <article>
            <app-auth-home-sixth-card></app-auth-home-sixth-card>
          </article>
        </section>
      </main>
      <app-auth-home-footer></app-auth-home-footer>
    </body>
  `,
  styles: ['.authBody {background: #222222}'],
})
export class AuthHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
