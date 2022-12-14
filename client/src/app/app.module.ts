import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'

// Modules
import { AppRoutingModule } from './app-routing.module'
import { AuthenticationModule } from './authentication/authentication.module'
import { HomeModule } from './home/home.module'
import { ProfilesModule } from './profiles/profiles.module'
import { VideosModule } from './videos/videos.module'

// http Request
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AuthenticationModule,
    HomeModule,
    ProfilesModule,
    VideosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
