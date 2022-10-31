import { Component } from '@angular/core'

@Component({
  selector: 'app-auth-home-third-card',
  templateUrl: './auth-home-third-card.component.html',
  styleUrls: ['auth-home-third-card.component.scss'],
})
export class AuthHomeThirdCardComponent {
  smartphoneImage: string =
    '../../../../assets/images/authentication/home/mobile-0819.jpg'
  showPoster: string =
    '../../../../assets/images/authentication/home/boxShot.png'
}
