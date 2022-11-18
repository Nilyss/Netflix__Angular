import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap, catchError, of, switchMap, map } from 'rxjs'
import { Videos } from './videos'

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  getMovies(query: string): Observable<Videos['results']> {
    return this.http
      .get<Videos['results']>(
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

  // logs & errors
  private log(res: any) {
    console.log(res)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  }
  constructor(private http: HttpClient) {}
}
