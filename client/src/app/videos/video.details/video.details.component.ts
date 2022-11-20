import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { VideosService } from '../videos.service'
import { map, Subscription } from 'rxjs'
import { DomSanitizer } from '@angular/platform-browser'
import { TvShow } from '../tvShow'
import { Movie } from '../movie'
import { Person } from '../person'
import { Trailer } from '../trailer'

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
  tvShowVideo: Trailer['results']
  movie: Movie
  movieVideo: Trailer['results']
  person: Person
  voteAverage: string
  baseImagePath: string = 'https://image.tmdb.org/t/p/w500'
  isAdultMedia: boolean
  genre: number
  genreName: string
  safeUrl

  getRequestedTvShow() {
    this.dataSubscription = this.videoService
      .getTvShowById(this.queryParamsId)
      .subscribe((tvShowDetails) => {
        this.tvShow = tvShowDetails
        this.voteAverage = tvShowDetails.vote_average.toFixed(2)
      })
  }

  getRequestedTvShowVideo() {
    this.dataSubscription = this.videoService
      .getTvShowVideosById(this.queryParamsId)
      .subscribe((data) => {
        this.tvShowVideo = data.results
        data.results.forEach((trailer) => {
          if (trailer.type.includes('Trailer')) {
            const URL = 'https://www.youtube.com/embed/' + trailer.key
            return (this.safeUrl =
              this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
          }
          if (trailer.type.includes('Teaser')) {
            const URL = 'https://www.youtube.com/embed/' + trailer.key
            return (this.safeUrl =
              this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
          }
          const URL = 'https://www.youtube.com/embed/' + trailer.key
          return (this.safeUrl =
            this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
        })
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

  getRequestedMovieVideo() {
    this.dataSubscription = this.videoService
      .getMovieVideosById(this.queryParamsId)
      .subscribe((data) => {
        this.movieVideo = data.results
        this.movieVideo.forEach((trailer) => {
          if (trailer.type === 'Trailer') {
            const URL = 'https://www.youtube.com/embed/' + trailer.key
            return (this.safeUrl =
              this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
          }
          if (trailer.type === 'Teaser') {
            const URL = 'https://www.youtube.com/embed/' + trailer.key
            return (this.safeUrl =
              this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
          }
          const URL = 'https://www.youtube.com/embed/' + trailer.key
          return (this.safeUrl =
            this.domSanitizer.bypassSecurityTrustResourceUrl(URL))
        })
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
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
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
      this.getRequestedTvShowVideo()
    }
    if (this.queryParamsMediaType === 'movie') {
      this.getRequestedMovie()
      this.getRequestedMovieVideo()
    }
    if (this.queryParamsMediaType === 'person') {
      this.getRequestedPerson()
    }
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
