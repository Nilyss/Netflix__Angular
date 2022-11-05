import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-sign-up',
  template: `
    <body>
      <app-auth-sign-up-header></app-auth-sign-up-header>
      <main class="authSignUp__main">
        <section>
          <article *ngIf="step0 === true">
            <app-auth-sign-up-step0
              (step0)="isStepZeroValid($event)"
            ></app-auth-sign-up-step0>
          </article>
          <article *ngIf="step1 === true">
            <app-auth-sign-up-step1></app-auth-sign-up-step1>
          </article>
          <article *ngIf="step2 === true">
            <app-auth-sign-up-step2></app-auth-sign-up-step2>
          </article>
          <article *ngIf="step3 === true">
            <app-auth-sign-up-step3></app-auth-sign-up-step3>
          </article>
        </section>
      </main>
      <app-auth-sign-up-footer></app-auth-sign-up-footer>
    </body>
  `,
  styles: ['.authSignUp__main {width: 100%; min-height: 64.5vh;}'],
})
export class AuthSignUpComponent implements OnInit {
  constructor() {}

  step0: boolean
  step1: boolean = false
  step2: boolean = false
  step3: boolean = false

  ngOnInit(): void {
    this.step0 = true
  }

  isStepZeroValid(submit: boolean) {
    this.step0 = !submit
    this.step1 = submit
  }
}
