import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { VideosService } from '../videos.service'
import { map, Subscription } from 'rxjs'
import { TvShow } from '../tvShow'
import { Movie } from '../movie'

@Component({
  selector: 'app-video.details',
  templateUrl: './video.details.component.html',
  styleUrls: ['./video.details.component.scss'],
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription | undefined
  queryParamsId: string
  queryParamsMediaType: string
  tvShow: TvShow
  movie: Movie
  baseImagePath: string = 'https://image.tmdb.org/t/p/w500'

  getRequestedTvShow() {
    this.dataSubscription = this.videoService
      .getTvShowById(this.queryParamsId)
      .subscribe((tvShowDetails) => {
        this.tvShow = tvShowDetails
        console.log('this.tvShow =>', this.tvShow)
      })
  }

  getRequestedMovie() {
    this.dataSubscription = this.videoService
      .getMovieById(this.queryParamsId)
      .subscribe((movieDetails) => {
        this.movie = movieDetails
        console.log('this.movie =>', this.movie)
      })
  }

  constructor(
    private router: Router,
    private videoService: VideosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map((params) => {
          this.queryParamsId = params['id']
          this.queryParamsMediaType = params['media_type']
        })
      )
      .subscribe()
    if (this.queryParamsMediaType === 'tv') {
      this.getRequestedTvShow()
    }
    if (this.queryParamsMediaType === 'movie') {
      this.getRequestedMovie()
    }
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
