import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private fb: FormBuilder) { }


  registerForm: FormGroup  = this.fb.group({
    username: ['', [Validators.minLength(5), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: []
    }, {
      validators: [sameValueGroupValidator('password', 'repass')]
    })
  })

  

  submitForm(){
    if(this.registerForm.invalid) return
  }

  clearForm(){
    this.registerForm.reset()
  }
}
