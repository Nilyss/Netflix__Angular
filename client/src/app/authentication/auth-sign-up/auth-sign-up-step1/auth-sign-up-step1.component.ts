import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { AuthenticationService } from '../../authentication.service'

@Component({
  selector: 'app-auth-sign-up-step1',
  templateUrl: './auth-sign-up-step1.component.html',
  styleUrls: ['./auth-sign-up-step1.component.scss'],
})
export class AuthSignUpStep1Component implements OnInit {
  // send true if the account is successfully created, for changing display component
  @Output() step1 = new EventEmitter<boolean>()

  emailInput: string = ''
  passwordInput: string = ''

  constructor(private authService: AuthenticationService) {}

  signupSubmit(email: string, password: string) {
    email = this.emailInput.trim()
    password = this.passwordInput.trim()
    if (!email) {
      return
    }
    if (!password) {
      return
    }
    this.authService.addUser({ email, password }).subscribe((res) => {
      if (res) {
        this.step1.emit(true)
      } else {
        console.error('HTTP Request failed')
      }
    })
  }

  ngOnInit(): void {}
}
