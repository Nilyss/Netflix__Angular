import { Component, OnInit, OnDestroy } from '@angular/core'
import { map, Subscription, switchMap, tap } from 'rxjs'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication/authentication.service'
import { User } from '../../authentication/user'
import { Profile } from '../profile'

@Component({
  selector: 'app-profiles.manage',
  templateUrl: './profiles.manage.component.html',
  styleUrls: ['./profiles.manage.component.scss'],
})
export class ProfilesManageComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  dataSubscription: Subscription | undefined
  userId: string
  userData: User
  userProfiles: Profile[]

  ngOnInit() {
    this.dataSubscription = this.authService
      .getConnectedUserId()
      .pipe(
        map((userId) => (this.userId = userId)),
        switchMap((userData) =>
          this.authService.getConnectedUserData(this.userId).pipe(
            map((userData) => {
              this.userData = userData
            }),
            tap(() =>
              console.log('Profiles fetched =>', this.userData.profiles)
            )
          )
        )
      )
      .subscribe(() => {
        this.userProfiles = this.userData.profiles
      })
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
