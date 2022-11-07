import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-sign-up-step2',
  templateUrl: './auth-sign-up-step2.component.html',
  styleUrls: ['./auth-sign-up-step2.component.scss'],
})
export class AuthSignUpStep2Component implements OnInit {
  constructor() {}

  tempImg: string = '../../../../assets/default.png' // remove after http request setup
  ngOnInit(): void {}
}
