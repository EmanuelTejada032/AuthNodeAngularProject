import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, NewUser, AuthResponse, LoggedInUser } from '../interfaces/Auth';
import { urls } from '../../../environments/urls';
import {catchError, map, tap} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user!: LoggedInUser;
  get user(){
    return {...this._user};
  }
  constructor(private http: HttpClient) { }

  login(userData: User){
    return this.http.post<AuthResponse>(urls.auth.login, userData).pipe(
      tap( response => {
        if(response.ok){
          this._user = {
            name: response.name!,
            uid: response.uid!
          }
          localStorage.setItem('user', JSON.stringify(this.user))
        }
      }),
      map( response => response.ok),
      catchError( error => of(false))
    )
  }
  register(newUserData: NewUser){
    return this.http.post<AuthResponse>(urls.auth.register, newUserData )
  }
}