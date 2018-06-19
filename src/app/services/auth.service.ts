import { Injectable } from '@angular/core';
import { LoginService } from '../abstract/login.service';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends LoginService {

  //protected url = "http://demo1601932.mockable.io/login-invalid";
  
  constructor(http: HttpClient) { 
    super(http, "http://demo1601932.mockable.io/login-invalid");  
  }

  isUserExists(user: {username: string}){
    let url;
    
    if (user.username == "cust@ngapp.com")
      url = "http://demo1601932.mockable.io/user-valid";
    else
      url = "http://demo1601932.mockable.io/user-invalid";

    return super.isUserExists(user, url);
  }

  check(user){

    let url;

    if (user.username == "cust@ngapp.com" && user.password == "cust1234")
      url = "https://demo1601932.mockable.io/login-valid";
    else
      url = "https://demo1601932.mockable.io/login-invalid";
    
      return super.check(user, url);
  }
}
