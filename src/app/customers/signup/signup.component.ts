import { Component, OnInit, createPlatform } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      fullname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  get fullname(){ return this.form.get('fullname')}
  get email(){ return this.form.get('email')}
  get password(){ return this.form.get('password')}
}
