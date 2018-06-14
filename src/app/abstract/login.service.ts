import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { NotFoundError } from '../errors/notfound-error';
import { Unauthorized } from '../errors/unauthorized-error';
import { AppError } from '../errors/app-error';

interface Credentials {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export abstract class LoginService {

  //private url;
  //private http: Http;
  readonly USER_NOT_FOUND = 404;
  readonly UNAUTHENTICATED = 401;

  constructor(private http:Http, private url: string) {    
  }

  check(credential: Credentials) {
    return this.http.post(this.url, credential)
      .pipe(
        map((response) => { console.log(response.json()); return response.json() }),
        retry(0),
        catchError((error: Response) => { return this.handleError(error) })
      );
  }

  private handleError(error: any) {    
    //console.log("handleError: ", error);
    if (error.status as number === this.USER_NOT_FOUND) {      
      return throwError(new NotFoundError(error));
    }
    else if (error.status as number === this.UNAUTHENTICATED) {      
      let e = new Unauthorized(error);      
      return throwError(e);
    }
    else {      
      return throwError(new AppError(error));
    }
  }
}
