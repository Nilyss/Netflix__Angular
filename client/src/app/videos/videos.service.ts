import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable, tap, catchError, of, map } from 'rxjs'
import { Video } from './video'
import { TvShow } from './tvShow'
import { Movie } from './movie'
import { Person } from './person'
import { Trailer } from './trailer'

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  apiKey = environment.THE_MOVIE_DB_API_KEY

  getVideosBySearch(query: string): Observable<Video['results']> {
    return this.http
      .get<Video['results']>(
        `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
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
        `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getTvShowVideosById(tvShowId: string): Observable<Trailer> {
    return this.http
      .get<Trailer>(
        ` https://api.themoviedb.org/3/tv/${tvShowId}/videos?api_key=${this.apiKey}&language=en-US`
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
        ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getMovieVideosById(movieId: string): Observable<Trailer> {
    return this.http
      .get<Trailer>(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  getPersonById(personId: string): Observable<Person> {
    return this.http
      .get<Person>(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${this.apiKey}&language=en-US`
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
