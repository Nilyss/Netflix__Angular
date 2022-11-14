import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication.service'
import { User } from '../../user'

@Component({
  selector: 'app-auth-sign-in-form',
  templateUrl: './auth-sign-in-form.component.html',
  styleUrls: ['auth-sign-in-form.component.scss'],
})
export class AuthSignInFormComponent {
  user: User
  emailInput: string = ''
  passwordInput: string = ''
  errorLogin: string = ''

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  loginSubmit(email: string, password: string) {
    this.errorLogin = ''
    email = this.emailInput
    password = this.passwordInput
    if (!email) {
      return
    }
    if (!password) {
      return
    }
    this.authService.connectUser(email, password).subscribe((res) => {
      if (res) {
        console.log('logged')
        this.router.navigate(['browse'])
      } else {
        this.passwordInput = ''
        this.errorLogin =
          'Invalid login. Please check your email or/and password'
      }
    })
  }
}
