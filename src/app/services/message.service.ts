import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private sub = new Subject();

  constructor() { }

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
