import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-auth-sign-up-step0',
  templateUrl: './auth-sign-up-step0.component.html',
  styleUrls: ['./auth-sign-up-step0.component.scss'],
})
export class AuthSignUpStep0Component implements OnInit {
  @Output() step0 = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  isStepZeroValid() {
    this.step0.emit(true)
  }
  image: string = '../../../../assets/images/authentication/sign-up/Devices.png'
}
