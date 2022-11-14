import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ProfilesManageComponent } from './profiles.manage/profiles.manage.component'

const profilesRoutes: Routes = [
  { path: 'profiles/manage', component: ProfilesManageComponent },
]

@NgModule({
  declarations: [ProfilesManageComponent],
  imports: [CommonModule, RouterModule.forChild(profilesRoutes)],
  exports: [],
})
export class ProfilesModule {}
