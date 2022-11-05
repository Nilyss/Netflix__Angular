import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-auth-sign-up-step1',
  templateUrl: './auth-sign-up-step1.component.html',
  styleUrls: ['./auth-sign-up-step1.component.scss'],
})
export class AuthSignUpStep1Component implements OnInit {
  // @Output() step1 = new EventEmitter<boolean>()
  email: string = ''
  password: string = ''

  constructor() {}

  ngOnInit(): void {}

  // isStepOneValid() {
  //   this.step1.emit(true)
  // }
}
