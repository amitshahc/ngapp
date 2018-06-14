import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotFoundError } from '../../errors/notfound-error';
import { Unauthorized } from '../../errors/unauthorized-error';
import { AppError } from '../../errors/app-error';
//import { InputLowercaseDirective } from '../../common/input-lowercase.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)])
  })

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  get email(){
    return this.form.get('email');
  }

  varifyLogin() {
    let f = this.form;
    let data = {username: f.get('email').value, password: f.get('password').value}; 

    this.auth.check(data)
      .subscribe((response: Response) => {
        console.log(response.headers);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert("User not found");
            this.form.setErrors({
              inValidUser : true
            })
          }
          else if (error instanceof Unauthorized) {
            alert("Unauthorized");
            this.form.setErrors({
              inValid : true
            })
          }
          else {
            alert("appError: true");
            this.form.setErrors({
              appError : true
            })
            //alert("Application Error");
          }
        });
  }

}
