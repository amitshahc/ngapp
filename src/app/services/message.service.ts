import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private sub = new Subject<any> ();
  private cid = new Subject<any> ();

  constructor() { }

  sendCustId(id: string){
    this.cid.next({cid: id});
  }

  getCustId(): Observable<any>{
    return this.cid.asObservable();
  }

  clearCustId(){
    this.cid.next({});
  }

  sendMessage(message: string){
    this.sub.next({text: message});
  }

  clearMessage(){
    this.sub.next();
  }

  getMessage(){
    return this.sub.asObservable();
  }
  
}
