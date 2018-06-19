import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from './signup.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      fullname: new FormControl('',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
        }),
      email: new FormControl('',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: SignupValidator.isExists(this.auth),
          updateOn: 'change'
        }),
      password: new FormControl('',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10), SignupValidator.validatePassword]
        })
    })
  }

  get fullname() { return this.form.get('fullname') }
  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }

  log(p) {
    console.log(p);
  }

  register(){
    //console.log(this.form.pending);
  }
}
