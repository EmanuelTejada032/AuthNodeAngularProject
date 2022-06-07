import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, NewUser, AuthResponse, LoggedInUser } from '../interfaces/Auth';
import { urls } from '../../../environments/urls';
import {catchError, map, tap} from 'rxjs/operators'
import { of, Observable } from 'rxjs';

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
          localStorage.setItem('token', response.token!)
          this._user = {
            name: response.name!,
            uid: response.uid!,
            email: response.email!
          }
        }
      }),
      map( response => response.ok),
      catchError( error => of(error.error.message))
    )
  }
  register(newUserData: NewUser){
    console.log('creating user');
    
    return this.http.post<AuthResponse>(urls.auth.register, newUserData ).pipe(
      tap( response => {
        if(response.ok){
          localStorage.setItem('token', response.token!)
          this._user = {
            name: response.name!,
            uid: response.uid!,
            email: response.email!
          }
        }
      }),
      map( response => response.ok),
      catchError( error => of(error.error.message))
    )
  }

  logout(){
    localStorage.removeItem('token');
  }

  validateToken(): Observable<boolean>{
    const headers = new HttpHeaders()
                  .set('x-token', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>(urls.auth.renewToken, {headers})
                    .pipe( 
                      map(response => {
                        localStorage.setItem('token', response.newToken!)
                        this._user = {
                          name: response.name!,
                          uid: response.uid!,
                          email: response.email!
                        }
                        return response.ok;
                      }),
                      catchError( error => of(false))
                    )
  }
}