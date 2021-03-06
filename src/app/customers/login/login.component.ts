import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotFoundError } from '../../errors/notfound-error';
import { Unauthorized } from '../../errors/unauthorized-error';
import { AppError } from '../../errors/app-error';
import { loginValidator } from './login.validator';
import { Router } from '@angular/router';
//import { InputLowercaseDirective } from '../../common/input-lowercase.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any;
  showLoader: boolean = false;

  form = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email], asyncValidators: loginValidator.notExists(this.auth), updateOn: 'blur' }),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)])
  })

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  log(p) {
    console.log(p);
  }

  showLoading(show: boolean){
    this.showLoader = show;
  }

  varifyLogin() {
    let f = this.form;
    let data = { username: f.get('email').value, password: f.get('password').value };
    this.showLoading(true);

    this.auth.check(data)
      .subscribe((response: Response) => {
        //console.log("Response:", response);
        this.user = response;

        if (this.user.session)
        {
          // window.location.href = '/customers/profile';
          this.router.navigate(['/customers/profile']);
        }
        else
          this.form.setErrors({ inValid: true });

          this.showLoading(false);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            //alert("User not found");
            this.form.setErrors({
              inValidUser: true
            });
          }
          else if (error instanceof Unauthorized) {
            this.form.setErrors({
              inValid: true
            });
          }
          else {
            this.form.setErrors({
              appError: true
            });
          }

          this.showLoading(false);
        });
  }

}
