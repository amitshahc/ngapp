import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidator } from './signup.validator';
import { AppError } from '../../errors/app-error';
import { CustomersService } from '../../services/customers.service';
import { AuthService } from '../../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  showLoader: boolean = false;
  private useradd: any;  

  constructor(private auth: AuthService, private customer: CustomersService, private router: Router) { }

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

  showLoading(show: boolean) {
    this.showLoader = show;
  }

  register() {
    let f = this.form;
    this.showLoading(true);
    let user = {
      "fullname": f.get('fullname').value,
      "email": f.get('email').value,
      "password": f.get('password').value
    };

    this.customer.create(user)
      .subscribe((response: Response) => {
        console.log("Response:", response);
        this.useradd = response;

        if (this.useradd.msg === "success")
          this.router.navigate(['/customers/login']);  //window.location.href = '/customers/profile';
        else
          this.form.setErrors({ inValid: true });

        this.showLoading(false);
      },
        (error: AppError) => {
          this.form.setErrors({
            appError: true
          });

          this.showLoading(false);
        }
      );
  }
}
