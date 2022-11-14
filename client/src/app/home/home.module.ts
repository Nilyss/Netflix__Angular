import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component'

const homeRoutes: Routes = [{ path: 'browse', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  exports: [],
})
export class HomeModule {}
