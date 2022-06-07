import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.formBuilder.group({
    email: ['testuser@gmail.com', [Validators.required, Validators.email]],
    password: ['testuser123456',[ Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.login(this.loginForm.value)
    .subscribe(validUser => {
      if(validUser === true){
        this.router.navigateByUrl("/dashboard");
      }else{
        Swal.fire(
          'Something went wrong',
          `${validUser}`,
          'error'
        )
      }
    })
  }
}


