import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AuthHomeComponent } from './auth-home/auth-home.component'
import { AuthHomeHeaderComponent } from './auth-home/auth-home-header/auth-home-header.component'
import { AuthHomeFirstCardComponent } from './auth-home/auth-home-first-card/auth-home-first-card.component'
import { AuthHomeSecondCardComponent } from './auth-home/auth-home-second-card/auth-home-second-card.component'
import { AuthHomeThirdCardComponent } from './auth-home/auth-home-third-card/auth-home-third-card.component'
import { AuthHomeFourthCardComponent } from './auth-home/auth-home-fourth-card/auth-home-fourth-card.component'
import { AuthHomeFifthCardComponent } from './auth-home/auth-home-fifth-card/auth-home-fifth-card.component'
import { AuthHomeSixthCardComponent } from './auth-home/auth-home-sixth-card/auth-home-sixth-card.component'
import { AuthHomeFooterComponent } from './auth-home/auth-home-footer/auth-home-footer.component'

const authRoutes: Routes = [
  { path: 'fr-en', component: AuthHomeComponent },
  { path: '', redirectTo: 'fr-en', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AuthHomeComponent,
    AuthHomeHeaderComponent,
    AuthHomeFirstCardComponent,
    AuthHomeSecondCardComponent,
    AuthHomeThirdCardComponent,
    AuthHomeFourthCardComponent,
    AuthHomeFifthCardComponent,
    AuthHomeSixthCardComponent,
    AuthHomeFooterComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(authRoutes)],
  exports: [AuthHomeComponent],
})
export class AuthenticationModule {}
