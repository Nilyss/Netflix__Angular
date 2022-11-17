import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ProfilesManageComponent } from './profiles.manage/profiles.manage.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const profilesRoutes: Routes = [
  { path: 'profiles/manage', component: ProfilesManageComponent },
]

@NgModule({
  declarations: [ProfilesManageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profilesRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ProfilesModule {}
