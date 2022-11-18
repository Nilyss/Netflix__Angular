import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router'
import { HomeHeaderComponent } from './home-header/home-header.component'
import { HomePromoCardComponent } from './home-promo-card/home-promo-card.component'
import { HomeUserModalComponent } from './home-header/home-user-modal/home-user-modal.component'
import { FormsModule } from '@angular/forms'
import { HomeSearchComponent } from './home-search/home-search.component'

const homeRoutes: Routes = [
  { path: 'browse', component: HomeComponent },
  { path: 'browse/search/query', component: HomeSearchComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomePromoCardComponent,
    HomeUserModalComponent,
    HomeSearchComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), FormsModule],
  exports: [],
})
export class HomeModule {}
