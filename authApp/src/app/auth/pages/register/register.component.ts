import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[ Validators.required,  Validators.minLength(6)]]
  })

  constructor(private formBuilder: FormBuilder, private router:Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.registerForm.value)
    .subscribe(response => {
      this.router.navigateByUrl("/dashboard")
    })
  }

}
