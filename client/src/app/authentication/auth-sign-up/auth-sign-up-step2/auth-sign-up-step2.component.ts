import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-auth-sign-up-step2',
  templateUrl: './auth-sign-up-step2.component.html',
  styleUrls: ['./auth-sign-up-step2.component.scss'],
})
export class AuthSignUpStep2Component implements OnInit {
  @Output() step3 = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  step3Send() {
    this.step3.emit(true)
  }
}
