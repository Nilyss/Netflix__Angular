import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-home-first-card',
  templateUrl: './auth-home-first-card.component.html',
  styleUrls: ['auth-home-first-card.component.scss'],
})
export class AuthHomeFirstCardComponent {
  constructor(private router: Router) {}
  email: string = ''

  goToRegistration() {
    if (this.email.length > 1) {
      this.router.navigate(['signup/registration'])
    }
  }
}
