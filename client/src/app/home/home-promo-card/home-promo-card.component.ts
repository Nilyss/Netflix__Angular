import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-promo-card',
  templateUrl: './home-promo-card.component.html',
  styleUrls: ['./home-promo-card.component.scss'],
})
export class HomePromoCardComponent implements OnInit {
  title: string = 'series'
  newLogo: string = '../../../assets/images/home/logo/new.png'
  promoLogo: string = '../../../assets/images/home/promo/supernatural.png'
  topLogo: string = '../../../assets/images/home/logo/top10.png'

  constructor() {}

  ngOnInit(): void {}
}
