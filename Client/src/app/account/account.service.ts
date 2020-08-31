import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IUser} from '../shared/models/user';
import { BehaviorSubject, ReplaySubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private CurrentUserSource = new ReplaySubject<IUser>(1);
  CurrentUser$ = this.CurrentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  // tslint:disable-next-line: typedef
  loadCurrentUser(token: string)
  {
    if (token === null)
    {
      this.CurrentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', {headers}).pipe(
      map((user: IUser) => {
        if (user)
        {
          localStorage.setItem('token', user.token);
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  login(values: any)
  {
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser) => {
        if (user)
        {
          localStorage.setItem('token', user.token);
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(values: any)
  {
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser) => {
        if (user)
        {
          localStorage.setItem('token', user.token);
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  logOut()
  {
    localStorage.removeItem('token');
    this.CurrentUserSource.next(null);
    this.router.navigateByUrl('/');

  }

  // tslint:disable-next-line: typedef
  CheckEmailExists(email: string)
  {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }



}
