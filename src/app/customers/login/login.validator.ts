import { AbstractControl, ValidationErrors } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { AppError } from "../../errors/app-error";
//import { HttpHeaders } from "@angular/common/http";

export class loginValidator {
    
    /*constructor(private auth: AuthService){
        
    }*/

    static notExists (auth: AuthService)
    {        
        /*
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(c.value != 'amit@yahoo.com')
                        resolve({notExists: true});
                    else
                        resolve(null);
                }, 2000);
            });
        */
       return (c: AbstractControl) : Promise<ValidationErrors | null> =>
       {
            return new Promise((resolve, reject) => {
                let email = c.value;
                auth.isUserExists({'username': email})
                .subscribe( 
                    (response) => { 
                        console.log(response); 
                        resolve(null);
                    },
                    (error: AppError) => {
                        console.log(error);
                        resolve({notExists: true});
                    }
                );
            });    
        }
    }
}