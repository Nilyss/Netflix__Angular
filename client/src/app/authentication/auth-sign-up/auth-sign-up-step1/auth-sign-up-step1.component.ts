import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core'
import { AuthenticationService } from '../../authentication.service'
import { map, Subscription, switchMap, tap } from 'rxjs'

@Component({
  selector: 'app-auth-sign-up-step1',
  templateUrl: './auth-sign-up-step1.component.html',
  styleUrls: ['./auth-sign-up-step1.component.scss'],
})
export class AuthSignUpStep1Component implements OnInit, OnDestroy {
  // send true if the account is successfully created, for changing display component
  @Output() step1 = new EventEmitter<boolean>()

  emailInput: string = ''
  passwordInput: string = ''
  errorMessage: string =
    ' Your password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, at least 8 characters, and can contain special characters'

  userId: string

  dataSubscription: Subscription | undefined

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
    this.dataSubscription = this.authService
      .addUser(email, password)
      .pipe(
        tap((user) => {
          if (!user) {
            this.passwordInput = ''
            this.errorMessage =
              'An account with this email address already exist'
            return console.error(
              'HTTP Request failed : An account with this email address already exist'
            )
          }
        }),
        switchMap((userId) =>
          this.authService.connectUser(email, password).pipe(
            map((id) => {
              this.userId = id
            })
          )
        )
      )
      .subscribe(() => {
        if (this.userId !== undefined) {
          this.step1.emit(true)
        }
      })
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
