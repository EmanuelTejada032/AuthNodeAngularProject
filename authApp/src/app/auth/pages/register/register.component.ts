import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    if(!this.registerForm.valid){
      console.log(this.registerForm.controls.name.errors);
      console.log(this.registerForm.controls.email.errors);
      console.log(this.registerForm.controls.password.errors);
      // this.registerForm.markAllAsTouched()
      return;
    }
    
    this.authService.register(this.registerForm.value)
    .subscribe(response => {
      if(response === true){
        this.router.navigateByUrl("/dashboard");
      }else{
        Swal.fire(
          'Something went wrong',
          `${response}`,
          'error'
        )
      }
    })
  }
  isValidField(field: string){
    // console.log(this.registerForm.get(`${field}`)?.hasError);
    
    // return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched
    return false;
  }

}
