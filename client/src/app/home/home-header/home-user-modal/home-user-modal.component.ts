import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../../authentication/authentication.service'
import { Subscription, map, switchMap, tap } from 'rxjs'
import { User } from '../../../authentication/user'
import { Profile } from '../../../profiles/profile'

@Component({
  selector: 'app-home-user-modal',
  templateUrl: './home-user-modal.component.html',
  styleUrls: ['./home-user-modal.component.scss'],
})
export class HomeUserModalComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription | undefined
  userId: string
  userData: User
  userProfiles: Profile[] = []

  goToProfiles() {
    return this.router.navigate(['profiles/manage'])
  }

  logout() {
    this.dataSubscription = this.authService.disconnectUser().subscribe(() => {
      return this.router.navigate([''])
    })
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

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
