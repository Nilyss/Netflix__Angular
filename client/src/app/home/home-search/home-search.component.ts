import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, map, tap } from 'rxjs'
import { VideosService } from '../../videos/videos.service'
import { Video } from '../../videos/video'

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription | undefined
  queryValue: string
  videos: Video['results']
  baseImagePath: string = 'https://image.tmdb.org/t/p/w500'

  getRequestVideo() {
    this.dataSubscription = this.videoService
      .getVideosBySearch(this.queryValue)
      .subscribe((videos) => {
        this.videos = videos
      })
    if (this.queryValue.length === 0) {
      this.router.navigate(['browse'])
    }
  }

  goToRequestVideo(videoId: number, media_type: string) {
    return this.router.navigate(
      [`videos/details/?id=${videoId}?mediatype=${media_type}`],
      {
        queryParams: { id: videoId, media_type: media_type },
      }
    )
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideosService
  ) {}

  ngOnInit(): void {
    this.dataSubscription = this.route.queryParams
      .pipe(
        map((params) => {
          console.log('params =>', params)
          this.queryValue = params['searchfor']
        }),
        tap(() => console.log(this.queryValue))
      )
      .subscribe()
    this.getRequestVideo()
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
