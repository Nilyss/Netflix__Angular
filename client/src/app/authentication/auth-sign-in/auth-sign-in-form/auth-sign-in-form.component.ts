import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-sign-in-form',
  templateUrl: './auth-sign-in-form.component.html',
  styleUrls: ['auth-sign-in-form.component.scss'],
})
export class AuthSignInFormComponent {
  email: string = ''
  password: string = ''
  errorMail: string = ''
  errorPassword: string = ''

  constructor(private router: Router) {}

  login() {
    {
      this.errorMail = ''
      this.errorPassword = ''
      if (this.email === '') {
        console.log('error mail proc')
        this.errorMail = 'Please enter a valid email or phone number.'
        return
      }
      if (this.password === '') {
        console.log('error password proc')
        this.errorPassword =
          'Your password must contain between 4 and 60 characters.'
        return
      }
      if (this.email === 'admin@admin.com' && this.password === 'adminlol') {
        this.router.navigate(['/home'])
      } else {
        this.password = ''
        this.errorPassword = 'Invalid account information'
      }
    }
  }
}
