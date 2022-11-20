import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VideoDetailsComponent } from './video.details/video.details.component'
import { RouterModule, Routes } from '@angular/router'
import { HomeModule } from '../home/home.module'

const videosRoute: Routes = [
  { path: 'videos/details/:id=mediatype=', component: VideoDetailsComponent },
]

@NgModule({
  declarations: [VideoDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(videosRoute), HomeModule],
})
export class VideosModule {}
