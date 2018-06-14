import { Injectable } from '@angular/core';
import { LoginService } from '../abstract/login.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends LoginService {

  //protected url = "http://demo1601932.mockable.io/login-invalid";
  
  constructor(http: Http) { 
    super(http, "http://demo1601932.mockable.io/login-invalid");
  }
}
