import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from '../../authentication/authentication.service'
import { User } from '../../authentication/user'
import { Subscription, switchMap } from 'rxjs'
import { Profile } from '../../profiles/profile'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit, OnDestroy {
  // ********** Init component variables & toggle logic **********

  logo: string = '../../../assets/images/logos/newNetflixLogo.png'
  isShowProfileModal: boolean = false
  isShowSearchBar: boolean = false
  userData: User
  profile: Profile[]
  dataSubscription: Subscription | undefined
  searchVideoValue: string

  toggleDisplaySearchBar() {
    this.isShowSearchBar = !this.isShowSearchBar
  }

  goToAuth() {
    return this.router.navigate(['fr-en'])
  }

  goToHome() {
    return this.router.navigate(['browse'])
  }

  sendParamsInputValue() {
    this.dataSubscription = this.route.params.subscribe(() => {
      return this.router.navigate(['browse/search/query'], {
        queryParams: { query: this.searchVideoValue },
      })
    })
  }

  // ********** Component initialisation **********

  ngOnInit(): void {
    this.dataSubscription = this.authService
      .getConnectedUserId()
      .pipe(
        switchMap((userId) => this.authService.getConnectedUserData(userId))
      )
      .subscribe((userData) => {
        this.userData = userData
        this.profile = userData.profiles
      })
  }
  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}
}
