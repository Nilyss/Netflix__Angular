import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { User } from '../../user'
import { AuthenticationService } from '../../authentication.service'

@Component({
  selector: 'app-auth-sign-up-step1',
  templateUrl: './auth-sign-up-step1.component.html',
  styleUrls: ['./auth-sign-up-step1.component.scss'],
})
export class AuthSignUpStep1Component implements OnInit {
  // @Output() step1 = new EventEmitter<boolean>()
  users: User[] = []
  email: string = ''
  password: string = ''

  constructor(private authService: AuthenticationService) {}

  createUser(email: string, password: string) {
    email = this.email.trim()
    if (!email) {
      return
    }
    password = this.password.trim()
    if (!password) {
      return
    }
    console.log(email, password)
    this.authService
      .addUser({ email, password })
      .subscribe((user) => this.users.push(user))
  }

  ngOnInit(): void {}

  // isStepOneValid() {
  //   this.step1.emit(true)
  // }
}
