import { AbstractControl, ValidationErrors } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { AppError } from "../../errors/app-error";

export class SignupValidator {
    static validatePassword(c: AbstractControl): ValidationErrors | null {
        
        let report: any = {};

        let p = c.value;
        
        if (p.length == 0)
            return null;

        if  (p.search(/[A-Z]/) < 0) {
            report.upper = true;            
        }
        if  (p.search(/[a-z]/) < 0) {
            report.lower = true;            
        }
        if  (p.search(/[0-9]/) < 0) {
            report.number = true;            
        }
        if  (p.search(/[!@#$%^&*]/) < 0) {
            report.special = true;            
        }
        if  (p.search(/[\s]/g) > -1) {
            report.space = true;            
        }        

        //console.log(report);
        if (report)
            return report;
        else
            return null;
    }

    static isExists (auth : AuthService)
    {
       return (c: AbstractControl) : Promise<ValidationErrors | null> =>
       {
            return new Promise((resolve, reject) => {
                let email = c.value;
                auth.isUserExists({'username': email})
                .subscribe( 
                    (response) => { 
                        //console.log(response); 
                        resolve(null);
                    },
                    (error: AppError) => {
                        //console.log(error);
                        resolve({isExists: true});
                    }
                );
            });    
        }
    }

}