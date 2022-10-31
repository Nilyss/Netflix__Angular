import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-home-header',
  templateUrl: './auth-home-header.component.html',
  styleUrls: ['./auth-home-header.component.scss'],
})
export class AuthHomeHeaderComponent {
  constructor(private router: Router) {}

  logo: string = '../../../../assets/images/logos/newNetflixLogo.png'

  goToSignIn() {
    this.router.navigate(['fr-en/login'])
  }
}
