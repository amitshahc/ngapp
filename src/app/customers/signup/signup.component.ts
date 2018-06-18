import { Component, OnInit, createPlatform } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordPolicy } from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = new FormGroup({
      fullname: new FormControl('', {validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(30)] }),
      email: new FormControl('', {validators: [ Validators.required, Validators.email], asyncValidators: null , updateOn: 'change' }),
      password: new FormControl('', {validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(10), PasswordPolicy.validate] })
    })
  }

  get fullname(){ return this.form.get('fullname')}
  get email(){ return this.form.get('email')}
  get password(){ return this.form.get('password')}

  log(p){
    console.log(p);
  }
}
