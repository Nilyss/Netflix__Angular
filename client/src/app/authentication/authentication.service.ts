import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap, catchError } from 'rxjs'
import { User } from './user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  addUser(user: User): Observable<User> {
    console.log('service proc =>')
    console.log(user)
    return this.http
      .post<User>(this.UsersApiUrl + '/signup', user, this.httpOptions)
      .pipe(tap((newUser) => console.log(`Create User ${newUser.email}`)))
  }

  private UsersApiUrl: string = 'http://localhost:8000/api/users'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
  constructor(private http: HttpClient) {}
}
