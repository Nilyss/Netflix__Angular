import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { VideosService } from '../videos.service'
import { map, Subscription } from 'rxjs'
import { TvShow } from '../tvShow'
import { Movie } from '../movie'
import { Person } from '../person'

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
  person: Person
  voteAverage: string
  baseImagePath: string = 'https://image.tmdb.org/t/p/w500'
  isAdultMedia: boolean
  genre: number
  genreName: string

  getRequestedTvShow() {
    this.dataSubscription = this.videoService
      .getTvShowById(this.queryParamsId)
      .subscribe((tvShowDetails) => {
        this.tvShow = tvShowDetails
        this.voteAverage = tvShowDetails.vote_average.toFixed(2)
      })
  }

  getRequestedMovie() {
    this.dataSubscription = this.videoService
      .getMovieById(this.queryParamsId)
      .subscribe((movieDetails) => {
        this.movie = movieDetails
        this.isAdultMedia = movieDetails.adult
        this.voteAverage = movieDetails.vote_average.toFixed(2)
      })
  }

  getRequestedPerson() {
    this.dataSubscription = this.videoService
      .getPersonById(this.queryParamsId)
      .subscribe((personDetails) => {
        this.person = personDetails
        this.isAdultMedia = personDetails.adult
        this.genre = personDetails.gender
        if (this.genre === 1) {
          this.genreName = 'Feminine'
        }
        if (this.genre === 2) {
          this.genreName = 'Masculine'
        }
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
    if (this.queryParamsMediaType === 'person') {
      this.getRequestedPerson()
    }
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
