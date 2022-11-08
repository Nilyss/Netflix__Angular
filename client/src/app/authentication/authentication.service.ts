import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap, catchError, of } from 'rxjs'
import { User } from './user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // CRUD users operations
  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.UsersApiUrl + '/signup', user, this.httpOptions)
      .pipe(
        tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null))
      )
  }

  connectUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.UsersApiUrl + '/login', user, this.httpOptions)
      .pipe(
        tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null))
      )
  }

  // logs & errors
  private log(res: any) {
    console.table(res)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  // http request setup
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  private UsersApiUrl: string = 'http://localhost:8000/api/users'

  constructor(private http: HttpClient) {}
}
