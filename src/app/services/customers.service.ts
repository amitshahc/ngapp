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

  get(uid){
    return super.getUser(uid, "http://demo1601932.mockable.io/customer/get");
  }
  
  create(user){
    return super.create(user, "http://demo1601932.mockable.io/customers");
  }

  update(uid, userData){
    return super.update(uid, userData, "http://demo1601932.mockable.io/customers")
  }

  //Admin
  getall4Admin(){
    return super.getAll("https://jsonplaceholder.typicode.com/users");
  }

  get4Admin(uid){
    return super.getUser(uid, "https://jsonplaceholder.typicode.com/users");
  }
}
