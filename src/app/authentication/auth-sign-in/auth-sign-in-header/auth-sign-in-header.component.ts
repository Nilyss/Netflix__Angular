import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-sign-in-header',
  template: `
    <header class="authLogin__header">
      <figure class="authLogin__header__fig">
        <img
          (click)="goToHome()"
          class="authLogin__header__fig__logo"
          src="{{ logo }}"
          alt="netflix logo"
        />
      </figure>
    </header>
  `,
  styleUrls: ['auth-sign-in-header.component.scss'],
})
export class AuthSignInHeaderComponent {
  constructor(private router: Router) {}

  logo: string = '../../../../assets/images/logos/newNetflixLogo.png'

  goToHome() {
    this.router.navigate(['fr-en'])
  }
}
