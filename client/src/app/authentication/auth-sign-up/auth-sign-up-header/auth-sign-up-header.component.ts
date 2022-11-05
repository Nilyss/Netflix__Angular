import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-sign-up-header',
  templateUrl: './auth-sign-up-header.component.html',
  styleUrls: ['./auth-sign-up-header.component.scss'],
})
export class AuthSignUpHeaderComponent {
  constructor(private router: Router) {}

  logo: string = '../../../../assets/images/logos/newNetflixLogo.png'

  goToHome() {
    this.router.navigate(['fr-en'])
  }

  goToSignIn() {
    this.router.navigate(['fr-en/login'])
  }
}
