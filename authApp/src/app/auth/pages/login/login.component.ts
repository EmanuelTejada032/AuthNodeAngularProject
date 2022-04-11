import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.formBuilder.group({
    email: ['testuser@gmail.com', [Validators.required, Validators.email]],
    password: ['testuser0001',[ Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.login(this.loginForm.value)
    .subscribe(validUser => {
      if(validUser){
        this.router.navigateByUrl("/dashboard");
      }else{
        //Invalid user logic
        console.log("Wrong credential");
      }
    })
  }
}


