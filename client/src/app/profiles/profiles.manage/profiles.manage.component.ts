import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
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
  // ********** Select a profile to edit **********

  // define variables types:
  userId: string
  userData: User
  userProfiles: Profile[]
  selectedProfile: Profile
  isProfileSelected: boolean = false

  // click on Done button
  goToHome() {
    this.router.navigate(['/browse'])
  }

  // click on a profile to edit
  selectProfile(id: string) {
    this.isProfileSelected = true
    this.userProfiles.find((profile) => {
      if (profile._id === id) {
        this.selectedProfile = profile
        if (this.selectedProfile) {
          this.profileId = this.selectedProfile._id
          this.nickname = this.selectedProfile.nickname
          this.profilePicture = this.selectedProfile.profilePicture
          this.isChild = this.selectedProfile.isChild
          this.isAccountAdmin = this.selectedProfile.isAccountAdmin
        }
      }
    })
  }

  // click on cancel button
  cancelProfileSelection() {
    this.isProfileSelected = false
  }

  // ********** profile edition form **********
  updateForm: FormGroup
  profileId: string
  nickname: string
  profilePicture: string | File
  isChild: boolean
  isAccountAdmin: boolean

  onNicknameChange(event: Event) {
    this.nickname = (event.target as HTMLInputElement).value
    this.updateForm.patchValue({
      nickname: this.nickname,
    })
    this.updateForm.get('nickname')?.updateValueAndValidity()
  }
  onFileAdded(event: Event) {
    this.profilePicture = (event.target as HTMLInputElement).files![0]
    this.updateForm.patchValue({
      profilePicture: this.profilePicture,
    })
    this.updateForm.get('profilePicture')?.updateValueAndValidity()
  }

  submitUpdateForm() {
    const formData = new FormData()
    formData.append('_id', this.userId)
    formData.append('nickname', this.nickname)
    formData.append('profilePicture', this.profilePicture)
    formData.append('isChild', JSON.stringify(this.isChild))
    formData.append('isAccountAdmin', JSON.stringify(this.isAccountAdmin))

    this.dataSubscription = this.authService
      .editProfile(this.profileId, formData)
      .pipe(
        tap((res) => {
          this.router.navigate(['browse'])
        })
      )
      .subscribe()
  }

  // ********** Init component **********
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  dataSubscription: Subscription | undefined

  ngOnInit() {
    // get userId, datas, and profiles
    this.dataSubscription = this.authService
      .getConnectedUserId()
      .pipe(
        map((userId) => (this.userId = userId)),
        switchMap((userData) =>
          this.authService.getConnectedUserData(this.userId).pipe(
            map((userData) => {
              this.userData = userData
            }),
            tap(() => {
              this.userProfiles = this.userData.profiles
              console.log('Profiles fetched =>', this.userData.profiles)
            })
          )
        )
      )
      .subscribe()

    this.updateForm = this.formBuilder.group({
      _id: this.profileId,
      nickname: this.nickname,
      profilePicture: this.profilePicture,
      isChild: this.isChild,
      isAccountAdmin: this.isAccountAdmin,
    })
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
