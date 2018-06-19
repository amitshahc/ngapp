import { Injectable } from '@angular/core';
import { UserService } from '../abstract/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomersService extends UserService {

  constructor(http: HttpClient) {
    super(http, "http://demo1601932.mockable.io/customers/");
  }

  getAll(){
    return super.getAll("http://demo1601932.mockable.io/customers/get");
  }
  
  create(user){
    return super.create(user, "http://demo1601932.mockable.io/customers/add");
  }
}
