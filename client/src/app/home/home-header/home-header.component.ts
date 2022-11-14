import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication/authentication.service'
import { User } from '../../authentication/user'
import { Subscription, switchMap } from 'rxjs'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit, OnDestroy {
  logo: string = '../../../assets/images/logos/newNetflixLogo.png'

  isShowSearchBar = false
  toggleDisplaySearchBar() {
    this.isShowSearchBar = !this.isShowSearchBar
  }

  goToAuth() {
    this.router.navigate(['fr-en'])
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  userData: User
  dataSubscription: Subscription | undefined

  ngOnInit(): void {
    this.dataSubscription = this.authService
      .getConnectedUserId()
      .pipe(
        switchMap((userId) => this.authService.getConnectedUserData(userId))
      )
      .subscribe((userData) => {
        this.userData = userData
      })
  }
  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
