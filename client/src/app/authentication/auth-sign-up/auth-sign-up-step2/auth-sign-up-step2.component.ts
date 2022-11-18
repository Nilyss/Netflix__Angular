import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthenticationService } from '../../authentication.service'
import { User } from '../../user'
import { Router } from '@angular/router'
import { switchMap, map, Subscription } from 'rxjs'

@Component({
  selector: 'app-auth-sign-up-step2',
  templateUrl: './auth-sign-up-step2.component.html',
  styleUrls: ['./auth-sign-up-step2.component.scss'],
})
export class AuthSignUpStep2Component implements OnInit, OnDestroy {
  userId: string
  userData: User | undefined
  dataSubscription: Subscription | undefined

  inputNickname: string
  inputIsChild: boolean = false
  formData: FormData

  editDefaultUser(id: string) {
    if (this.userData) {
      this.userData.profiles.forEach((data) => {
        this.formData = new FormData()
        this.formData.append('_id', this.userId)
        this.formData.append('nickname', this.inputNickname)
        this.formData.append('profilePicture', data.profilePicture)
        this.formData.append('isChild', JSON.stringify(this.inputIsChild))
        this.formData.append(
          'isAccountAdmin',
          JSON.stringify(data.isAccountAdmin)
        )
      })
      this.dataSubscription = this.authService
        .editProfile(this.userId, this.formData)
        ?.subscribe((updatedData) => {
          if (updatedData) {
            this.router.navigate(['browse'])
          }
        })
    }
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSubscription = this.authService
      .getConnectedUserId()
      .pipe(
        map((userId) => (this.userId = userId)),
        switchMap(() => this.authService.getConnectedUserData(this.userId))
      )
      .subscribe((userData) => (this.userData = userData))
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
