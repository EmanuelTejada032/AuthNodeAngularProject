import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(): Observable<boolean> |  boolean {
    return this.authService.validateToken().pipe(
      tap( validToken => {
         if(!validToken){
          this.router.navigateByUrl('/auth')
          Swal.fire(
            'Unathorized',
            `Login first`,
            'error'
          )
         }
      })
    );
  }
  canLoad(): Observable<boolean> |  boolean {
    return this.authService.validateToken().pipe(
      tap( validToken => {
         if(!validToken){
          this.router.navigateByUrl('/auth')
          Swal.fire(
            'Unathorized',
            `Login first`,
            'error'
          )
         }
      })
    );;
  }
}
