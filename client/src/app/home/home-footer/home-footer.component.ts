import { Component } from '@angular/core'

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent {
  facebookLogo: string = '../../../assets/images/home/logo/facebook.png'
  instagramLogo: string = '../../../assets/images/home/logo/instagram.png'
  twitterLogo: string = '../../../assets/images/home/logo/twitter.png'
  youtubeLogo: string = '../../../assets/images/home/logo/youtube.png'
}
