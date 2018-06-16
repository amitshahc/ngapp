import { Injectable } from '@angular/core';
import { LoginService } from '../abstract/login.service';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

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
    
    if (user.username == "amit@yahoo.com")
      url = "";
    else
      url = "http://demo1601932.mockable.io/user-invalid";

    return super.isUserExists(user, url);
  }
}
