import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  get user(){
    return {...this.authService.user}
  }
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl("/auth");
  }

}
