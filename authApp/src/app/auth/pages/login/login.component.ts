import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.formBuilder.group({
    email: [, Validators.required],
    password: [, Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
    console.log("sending loging data", this.loginForm.value);
  }

}
