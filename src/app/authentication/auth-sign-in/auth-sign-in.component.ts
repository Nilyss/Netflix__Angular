import { Component } from '@angular/core'

@Component({
  selector: 'app-auth-sign-in',
  template: `
    <body class="authLogin">
      <figure class="authLogin__fig">
        <img
          class="authLogin__fig__background"
          src="{{ background }}"
          alt="background"
        />
      </figure>
      <app-auth-sign-in-header></app-auth-sign-in-header>
      <main>
        <app-auth-sign-in-form></app-auth-sign-in-form>
      </main>
      <app-auth-sign-in-footer></app-auth-sign-in-footer>
    </body>
  `,
  styleUrls: ['auth-sign-in.component.scss'],
})
export class AuthSignInComponent {
  background: string =
    '../../../assets/images/authentication/home/authBackground.jpg'
}
