import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap, catchError, of, map } from 'rxjs'
import { Video } from './video'
import { TvShow } from './tvShow'
import { Movie } from './movie'

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  getVideosBySearch(query: string): Observable<Video['results']> {
    return this.http
      .get<Video['results']>(
        `https://api.themoviedb.org/3/search/multi?api_key=e480c5de18e4c27893ea37f46f0af505&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .pipe(
        map((data) => data['results']),
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getTvShowById(tvShowId: string): Observable<TvShow> {
    return this.http
      .get<TvShow>(
        `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=e480c5de18e4c27893ea37f46f0af505&language=en-US`
      )
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http
      .get<Movie>(
        ` https://api.themoviedb.org/3/movie/${movieId}?api_key=e480c5de18e4c27893ea37f46f0af505&language=en-US`
      )
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  // logs & errors
  private log(res: any) {
    console.log(res)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  constructor(private http: HttpClient) {}
}
