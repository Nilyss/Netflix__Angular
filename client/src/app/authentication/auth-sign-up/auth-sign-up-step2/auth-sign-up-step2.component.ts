import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../../authentication.service'
import { User } from '../../user'

@Component({
  selector: 'app-auth-sign-up-step2',
  templateUrl: './auth-sign-up-step2.component.html',
  styleUrls: ['./auth-sign-up-step2.component.scss'],
})
export class AuthSignUpStep2Component implements OnInit {
  userId: string
  userData: User | undefined

  inputNickname: string
  inputIsChild: boolean

  updatedData: [
    {
      _id: string
      nickname: string
      profilePicture: string
      isChild: boolean
      isAccountAdmin: boolean
    }
  ]

  constructor(private authService: AuthenticationService) {}
  ngOnInit() {
    this.authService.getConnectedUserId().subscribe((userId: string) => {
      this.userId = userId
      if (!userId) {
        return console.log("Error: can't get userId")
      }
      if (userId) {
        this.authService.getConnectedUserData(userId)?.subscribe((userData) => {
          this.userData = userData
        })
      }
    })
  }

  editDefaultUser(id: string) {
    if (this.userData) {
      this.userData.profiles.forEach((data) => {
        this.updatedData = [
          {
            ...data,
            nickname: this.inputNickname,
            isChild: this.inputIsChild,
            isAccountAdmin: true,
          },
        ]
      })
      this.authService
        .editConnectedUser(this.userId, this.updatedData)
        ?.subscribe((updatedData) => {
          if (updatedData) {
          }
        })
    }
  }
}
