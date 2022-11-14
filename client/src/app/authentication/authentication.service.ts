import { Injectable, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap, catchError, of } from 'rxjs'
import { User } from './user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {
  createUser: {}

  ngOnInit() {}

  // CRUD users operations
  addUser(email: string, password: string): Observable<User> {
    this.createUser = { email, password }
    return this.http
      .post<User>(
        this.usersApiUrl + '/users/signup',
        this.createUser,
        this.httpOptions
      )
      .pipe(
        tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null))
      )
  }

  connectUser(email: string, password: string): Observable<string> {
    return this.http
      .post<string>(
        this.usersApiUrl + '/users/login',
        { email, password },
        this.httpOptions
      )
      .pipe(
        tap((res) => this.log(res)),
        catchError((error) => this.handleError(error, null))
      )
  }

  getConnectedUserId(): Observable<string> {
    return this.http
      .get<string>(this.usersApiUrl + '/jwtid', this.httpOptions)
      .pipe(
        tap((res) => {
          this.log('User ID successfully fetched => ' + res)
        }),
        catchError((error) => this.handleError(error, null))
      )
  }

  getConnectedUserData(userId: string): Observable<User> {
    return this.http
      .get<User>(this.usersApiUrl + `/users/${userId}`, this.httpOptions)
      .pipe(
        tap((res) => {
          this.log(res)
        }),
        catchError((error) => this.handleError(error, undefined))
      )
  }

  editConnectedUser(
    userId: string,
    profiles: [
      {
        nickname: string
        isChild: boolean
      }
    ]
  ): Observable<User> | undefined {
    return this.http
      .put<User>(
        this.usersApiUrl + `/users/update/${userId}`,
        { profiles },
        this.httpOptions
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

  // http request setup
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  }

  private usersApiUrl: string = 'http://localhost:8000/api'

  constructor(private http: HttpClient) {}
}
